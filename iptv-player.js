class IPTVPlayer {
  constructor() {
    this.channels = [];
    this.currentChannel = null;
    this.videoPlayer = document.getElementById("videoPlayer");
    this.channelList = document.getElementById("channelList");
    this.nowPlaying = document.getElementById("nowPlaying");
    this.useCorsProxy = false;

    this.initializePlayer();
  }

  initializePlayer() {
    // Set up video player attributes for CORS
    this.videoPlayer.crossOrigin = "anonymous";
    this.videoPlayer.preload = "none";

    // Set up video player error handling
    this.videoPlayer.addEventListener("error", (e) => {
      console.error("Video player error:", e);
      this.handlePlayerError();
    });

    this.videoPlayer.addEventListener("loadeddata", () => {
      console.log("Video loaded successfully");
    });

    this.videoPlayer.addEventListener("canplay", () => {
      console.log("Video can play");
    });

    this.videoPlayer.addEventListener("loadstart", () => {
      console.log("Video load started");
    });

    // Initialize HLS.js
    this.initializeHLS();

    // Add keyboard controls for Tizen remote
    document.addEventListener("keydown", (e) => {
      this.handleRemoteControl(e);
    });

    // Add CORS proxy checkbox listener
    const corsCheckbox = document.getElementById("useCorsProxy");
    if (corsCheckbox) {
      corsCheckbox.addEventListener("change", (e) => {
        this.setCorsProxy(e.target.checked);
      });
    }
  }

  // Parse M3U playlist content
  parseM3U(content) {
    const channels = [];
    const lines = content.split("\n");
    let currentChannel = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("#EXTINF:")) {
        currentChannel = this.parseExtinfLine(line);
      } else if (line && !line.startsWith("#") && currentChannel) {
        currentChannel.url = line;
        channels.push(currentChannel);
        currentChannel = null;
      }
    }

    return channels;
  }

  // Parse EXTINF line to extract channel info
  parseExtinfLine(line) {
    const channel = {};

    // Extract duration and name
    const match = line.match(/#EXTINF:(-?\d+)(?:\s+(.*))?,(.*)/);
    if (match) {
      channel.duration = parseInt(match[1]);
      channel.name = match[3].trim();

      // Extract additional attributes like group-title and tvg-id
      const attributes = match[2];
      if (attributes) {
        const groupMatch = attributes.match(/group-title="([^"]*)"/);
        if (groupMatch) {
          channel.group = groupMatch[1];
        }

        const tvgIdMatch = attributes.match(/tvg-id="([^"]*)"/);
        if (tvgIdMatch) {
          channel.tvgId = tvgIdMatch[1];
        }

        const tvgLogoMatch = attributes.match(/tvg-logo="([^"]*)"/);
        if (tvgLogoMatch) {
          channel.logo = tvgLogoMatch[1];
        }
      }
    }

    return channel;
  }

  // Load playlist from URL
  async loadPlaylistFromUrl(url) {
    try {
      this.showMessage("Đang tải playlist...");

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const content = await response.text();
      this.channels = this.parseM3U(content);

      this.displayChannels();
      this.showMessage(`Đã tải ${this.channels.length} kênh`);
    } catch (error) {
      console.error("Error loading playlist:", error);
      this.showMessage("Lỗi khi tải playlist: " + error.message, true);
    }
  }

  // Load playlist from local file
  loadPlaylistFromFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target.result;
        this.channels = this.parseM3U(content);
        this.displayChannels();
        this.showMessage(`Đã tải ${this.channels.length} kênh từ file`);
      } catch (error) {
        console.error("Error parsing file:", error);
        this.showMessage("Lỗi khi đọc file: " + error.message, true);
      }
    };

    reader.onerror = () => {
      this.showMessage("Lỗi khi đọc file", true);
    };

    reader.readAsText(file);
  }

  // Display channels in the list
  displayChannels() {
    this.channelList.innerHTML = "";

    // Group channels by category if available
    const groupedChannels = this.groupChannelsByCategory();

    Object.keys(groupedChannels).forEach((group) => {
      if (group !== "undefined") {
        const groupHeader = document.createElement("div");
        groupHeader.className = "channel-group";
        groupHeader.innerHTML = `<strong>${group}</strong>`;
        this.channelList.appendChild(groupHeader);
      }

      groupedChannels[group].forEach((channel) => {
        const channelElement = document.createElement("div");
        channelElement.className = "channel-item";
        channelElement.innerHTML = `
                    ${
                      channel.logo
                        ? `<img src="${channel.logo}" alt="" style="width: 20px; height: 20px; margin-right: 8px;">`
                        : ""
                    }
                    ${channel.name}
                `;

        channelElement.addEventListener("click", (event) => {
          this.playChannel(channel, event.target.closest(".channel-item"));
        });

        this.channelList.appendChild(channelElement);
      });
    });
  }

  // Group channels by category
  groupChannelsByCategory() {
    const groups = {};

    this.channels.forEach((channel) => {
      const group = channel.group || "Khác";
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(channel);
    });

    return groups;
  }

  // Play selected channel
  async playChannel(channel, clickedElement = null) {
    try {
      this.showMessage(`Đang tải: ${channel.name}`);
      console.log("Playing channel:", channel);

      // Clean up previous HLS instance
      this.cleanupHLS();

      // Update UI
      document.querySelectorAll(".channel-item").forEach((item) => {
        item.classList.remove("active");
      });

      if (clickedElement) {
        clickedElement.classList.add("active");
      }

      this.currentChannel = channel;

      // Check if it's an HLS stream
      if (channel.url.includes(".m3u8") || channel.url.includes("m3u8")) {
        console.log("Detected HLS stream:", channel.url);
        if (this.hls && Hls.isSupported()) {
          console.log("HLS.js is supported, initializing...");
          // Use HLS.js for HLS streams
          const streamUrl = this.applyCorsProxy(channel.url);
          console.log("Stream URL (with proxy if enabled):", streamUrl);

          this.hls.loadSource(streamUrl);
          this.hls.attachMedia(this.videoPlayer);

          // Wait for HLS to be ready
          await new Promise((resolve, reject) => {
            const onManifestParsed = () => {
              console.log("HLS manifest parsed successfully");
              this.hls.off(Hls.Events.MANIFEST_PARSED, onManifestParsed);
              resolve();
            };
            const onError = (event, data) => {
              console.error("HLS error during loading:", data);
              if (data.fatal) {
                this.hls.off(Hls.Events.ERROR, onError);
                reject(new Error(`HLS loading failed: ${data.details}`));
              }
            };

            this.hls.on(Hls.Events.MANIFEST_PARSED, onManifestParsed);
            this.hls.on(Hls.Events.ERROR, onError);

            // Timeout after 15 seconds
            setTimeout(() => {
              console.log("HLS loading timeout");
              this.hls.off(Hls.Events.MANIFEST_PARSED, onManifestParsed);
              this.hls.off(Hls.Events.ERROR, onError);
              reject(new Error("HLS loading timeout"));
            }, 15000);
          });

          console.log("Attempting to play video...");
          await this.videoPlayer.play();
          console.log("Video started playing");
        } else {
          throw new Error("HLS streams are not supported in this browser");
        }
      } else {
        console.log("Using native video player for:", channel.url);
        // Use native video player for other formats
        this.videoPlayer.src = channel.url;
        await this.videoPlayer.play();
      }

      this.nowPlaying.innerHTML = `
                <strong>Đang phát:</strong> ${channel.name}
                ${
                  channel.group
                    ? `<br><small>Nhóm: ${channel.group}</small>`
                    : ""
                }
            `;
    } catch (error) {
      console.error("Error playing channel:", error);
      this.showMessage(`Lỗi: ${error.message}`, true);
      this.handlePlayerError();
    }
  }

  // Handle player errors
  handlePlayerError() {
    const error = this.videoPlayer.error;
    let message = "Lỗi phát video";

    if (error) {
      switch (error.code) {
        case error.MEDIA_ERR_ABORTED:
          message = "Video playback was aborted";
          break;
        case error.MEDIA_ERR_NETWORK:
          message = "Lỗi kết nối mạng";
          break;
        case error.MEDIA_ERR_DECODE:
          message = "Lỗi giải mã video";
          break;
        case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          message =
            "Định dạng video không được hỗ trợ. Thử tải lại hoặc chọn kênh khác.";
          break;
      }
    }

    this.showMessage(`${message} - ${this.currentChannel?.name}`, true);
  }

    // Clean up HLS instance when switching channels
    cleanupHLS() {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
            // Recreate HLS instance for next use
            this.initializeHLS();
        }
    }

    // Initialize HLS instance
    initializeHLS() {
        if (Hls.isSupported()) {
            this.hls = new Hls({
                debug: false,
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });

            this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                console.log('HLS manifest parsed, found ' + data.levels.length + ' quality levels');
            });

            this.hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('HLS error:', data);
                console.error('Error details:', {
                    type: data.type,
                    details: data.details,
                    fatal: data.fatal,
                    url: data.url || this.currentChannel?.url
                });

                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log('Fatal network error encountered, try to recover');
                            this.showMessage('Lỗi mạng, đang thử kết nối lại...', true);
                            this.hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            console.log('Fatal media error encountered, try to recover');
                            this.showMessage('Lỗi media, đang thử phục hồi...', true);
                            this.hls.recoverMediaError();
                            break;
                        default:
                            console.log('Fatal error, cannot recover');
                            this.showMessage('Lỗi không thể khắc phục. Kiểm tra URL stream.', true);
                            this.cleanupHLS();
                            break;
                    }
                }
            });
        }
    }

  // Handle Tizen remote control
  handleRemoteControl(event) {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
        this.navigateChannels(event.key);
        event.preventDefault();
        break;
      case "Enter":
        if (this.currentChannel) {
          this.playChannel(this.currentChannel);
        }
        break;
    }
  }

  // Navigate channels with arrow keys
  navigateChannels(direction) {
    if (this.channels.length === 0) return;

    const currentIndex = this.currentChannel
      ? this.channels.findIndex((ch) => ch.url === this.currentChannel.url)
      : -1;

    let newIndex;
    if (direction === "ArrowDown") {
      newIndex = (currentIndex + 1) % this.channels.length;
    } else {
      newIndex =
        currentIndex <= 0 ? this.channels.length - 1 : currentIndex - 1;
    }

    this.playChannel(this.channels[newIndex]);
  }

  // Apply CORS proxy to URL if enabled
  applyCorsProxy(url) {
    if (this.useCorsProxy && url) {
      // Using allorigins.win CORS proxy
      return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    }
    return url;
  }

  // Update CORS proxy setting
  setCorsProxy(enabled) {
    this.useCorsProxy = enabled;
    console.log("CORS proxy " + (enabled ? "enabled" : "disabled"));
  }

  // Utility functions
  showMessage(message, isError = false) {
    this.nowPlaying.innerHTML = isError
      ? `<span style="color: #ff4444;">${message}</span>`
      : `<span style="color: #44ff44;">${message}</span>`;

    console.log(message);
  }
}

// Global functions for HTML events
let iptvPlayer;

function loadPlaylist() {
  const url = document.getElementById("m3uUrl").value;
  if (!url) {
    alert("Vui lòng nhập URL M3U");
    return;
  }

  if (!iptvPlayer) {
    iptvPlayer = new IPTVPlayer();
  }

  iptvPlayer.loadPlaylistFromUrl(url);
}

function loadSamplePlaylist() {
  // Sample M3U URL for testing
  const sampleUrl =
    "https://raw.githubusercontent.com/thichcode/thichcode/refs/heads/main/fptplay.m3u";
  document.getElementById("m3uUrl").value = sampleUrl;
  loadPlaylist();
}

function loadTestFile() {
  // Load the local test.m3u file
  fetch('./test.m3u')
    .then(response => response.text())
    .then(content => {
      if (!iptvPlayer) {
        iptvPlayer = new IPTVPlayer();
      }
      iptvPlayer.channels = iptvPlayer.parseM3U(content);
      iptvPlayer.displayChannels();
      iptvPlayer.showMessage(`Đã tải ${iptvPlayer.channels.length} kênh từ file test`);
    })
    .catch(error => {
      console.error('Error loading test file:', error);
      if (!iptvPlayer) {
        iptvPlayer = new IPTVPlayer();
      }
      iptvPlayer.showMessage('Lỗi khi tải file test: ' + error.message, true);
    });
}

function handleFileSelect(files) {
  if (files.length === 0) return;

  if (!iptvPlayer) {
    iptvPlayer = new IPTVPlayer();
  }

  iptvPlayer.loadPlaylistFromFile(files[0]);
}

// Initialize player when page loads
document.addEventListener("DOMContentLoaded", () => {
  iptvPlayer = new IPTVPlayer();
});

// Export for Tizen app context
if (typeof module !== "undefined" && module.exports) {
  module.exports = IPTVPlayer;
}
