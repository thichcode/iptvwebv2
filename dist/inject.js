(function () {
  var DEFAULT_PLAYLIST = "https://raw.githubusercontent.com/vuminhthanh12/vuminhthanh12/refs/heads/main/vmttv";

var FALLBACK_M3U = "#EXTM3U
" +
"#EXTINF:0,VTV C
http://192.168.1.7:1234/udp/225.1.2.245:30120
" +
"#EXTINF:0,VTV1 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.249:30120
" +
"#EXTINF:0,VTV2 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.13:30120
" +
"#EXTINF:0,VTV3 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.247:30120
" +
"#EXTINF:0,VTV4 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.20:30120
" +
"#EXTINF:0,VTV5 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.131:30120
" +
"#EXTINF:0,VTV5 Tây Nam B
http://192.168.1.7:1234/udp/225.1.2.236:30120
" +
"#EXTINF:0,VTV5 Tây Nguyên (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.108:30120
" +
"#EXTINF:0,VTV7 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.96:30120
" +
"#EXTINF:0,VTV8 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.166:30120
" +
"#EXTINF:0,VTV9 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.128:30120
" +
"#EXTINF:0,Unknown
http://192.168.1.7:1234/udp/225.1.1.152:30120
" +
"#EXTINF:0,Unknown
http://192.168.1.7:1234/udp/225.1.1.151:30120
" +
"#EXTINF:0,Unknown
http://192.168.1.7:1234/udp/225.1.1.74:30120
" +
"#EXTINF:0,ABC Australia (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.21:30120
" +
"#EXTINF:0,ANTV HD (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.169:30120
" +
"#EXTINF:0,ATV HD _ TH An Giang (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.173:30120
" +
"#EXTINF:0,AXN (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.225:30120
" +
"#EXTINF:0,Animal Planet (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.231:30120
" +
"#EXTINF:0,Arirang
http://192.168.1.7:1234/udp/225.1.1.201:30120
" +
"#EXTINF:0,Asian Food Network (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.198:30120
" +
"#EXTINF:0,Asian Food Network (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.3.47:30120
" +
"#EXTINF:0,BBC CbeeBies (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.134:30120
" +
"#EXTINF:0,BBC Earth (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.24:30120
" +
"#EXTINF:0,BBC Lifestyle (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.52:30120
" +
"#EXTINF:0,BBC News (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.74:30120
" +
"#EXTINF:0,BGTV _ TH B
http://192.168.1.7:1234/udp/225.1.1.164:30120
" +
"#EXTINF:0,BTV HD _ TH Bình Thu
http://192.168.1.7:1234/udp/225.1.1.124:30120
" +
"#EXTINF:0,BTV _ TH Bình
http://192.168.1.7:1234/udp/225.1.1.145:30120
" +
"#EXTINF:0,BTV9 B Channel (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.189:30120
" +
"#EXTINF:0,BTV9 B Channel (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.3.58:30120
" +
"#EXTINF:0,Bloomberg (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.91:30120
" +
"#EXTINF:0,Boomerang (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.138:30120
" +
"#EXTINF:0,CNA (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.202:30120
" +
"#EXTINF:0,CNN (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.242:30120
" +
"#EXTINF:0,CRTV HD _ TH Cao B
http://192.168.1.7:1234/udp/225.1.1.102:30120
" +
"#EXTINF:0,CTV HD _ TH Cà Mau (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.104:30120
" +
"#EXTINF:0,Cartoon Network (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.231:30120
" +
"#EXTINF:0,DRT HD _ TH
http://192.168.1.7:1234/udp/225.1.1.64:30120
" +
"#EXTINF:0,DW (English) (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.46:30120
" +
"#EXTINF:0,Da Vinci (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.197:30120
" +
"#EXTINF:0,DaNangTV1 HD _ TH TP.
http://192.168.1.7:1234/udp/225.1.1.147:30120
" +
"#EXTINF:0,DaNangTV2 HD _ TH TP.
http://192.168.1.7:1234/udp/225.1.1.146:30120
" +
"#EXTINF:0,Discovery Asia (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.223:30120
" +
"#EXTINF:0,Discovery Channel (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.238:30120
" +
"#EXTINF:0,Dolife Hospital
http://192.168.1.7:1234/udp/225.1.1.127:30120
" +
"#EXTINF:0,Dreamworks (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.136:30120
" +
"#EXTINF:0,Event
http://192.168.1.7:1234/udp/225.1.1.94:30120
" +
"#EXTINF:0,FPT Gi
http://192.168.1.7:1234/udp/225.1.1.2:30120
" +
"#EXTINF:0,FPT Gi
http://192.168.1.7:1234/udp/225.1.4.199:30120
" +
"#EXTINF:0,FPT Gi
http://192.168.1.7:1234/udp/225.1.4.200:30120
" +
"#EXTINF:0,Fashion TV (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.227:30120
" +
"#EXTINF:0,France 24 (English) (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.211:30120
" +
"#EXTINF:0,Grand Phoenix Hotel
http://192.168.1.7:1234/udp/225.1.1.66:30120
" +
"#EXTINF:0,H1 HD _ TH Hà N
http://192.168.1.7:1234/udp/225.1.2.186:30120
" +
"#EXTINF:0,H2 HD _ TH Hà N
http://192.168.1.7:1234/udp/225.1.1.125:30120
" +
"#EXTINF:0,HBO (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.233:30120
" +
"#EXTINF:0,HCATV5
http://192.168.1.7:1234/udp/225.1.2.144:30120
" +
"#EXTINF:0,HGTV HD _ TH H
http://192.168.1.7:1234/udp/225.1.1.157:30120
" +
"#EXTINF:0,HTTV HD _ TH Hà T
http://192.168.1.7:1234/udp/225.1.1.75:30120
" +
"#EXTINF:0,HTV Keys
http://192.168.1.7:1234/udp/225.1.1.177:30120
" +
"#EXTINF:0,HTV Keys
http://192.168.1.7:1234/udp/225.1.3.127:30120
" +
"#EXTINF:0,HTV Th
http://192.168.1.7:1234/udp/225.1.1.165:30120
" +
"#EXTINF:0,HTV Th
http://192.168.1.7:1234/udp/225.1.3.25:30120
" +
"#EXTINF:0,HTV1
http://192.168.1.7:1234/udp/225.1.1.180:30120
" +
"#EXTINF:0,HTV1
http://192.168.1.7:1234/udp/225.1.3.125:30120
" +
"#EXTINF:0,HTV2 Vie Channel (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.193:30120
" +
"#EXTINF:0,HTV3
http://192.168.1.7:1234/udp/225.1.1.178:30120
" +
"#EXTINF:0,HTV3
http://192.168.1.7:1234/udp/225.1.3.36:30120
" +
"#EXTINF:0,HTV7 HD (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.192:30120
" +
"#EXTINF:0,HTV9 HD (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.190:30120
" +
"#EXTINF:0,HTVC Ca Nh
http://192.168.1.7:1234/udp/225.1.1.185:30120
" +
"#EXTINF:0,HTVC Du L
http://192.168.1.7:1234/udp/225.1.1.166:30120
" +
"#EXTINF:0,HTVC Gia
http://192.168.1.7:1234/udp/225.1.1.170:30120
" +
"#EXTINF:0,HTVC Gia
http://192.168.1.7:1234/udp/225.1.3.84:30120
" +
"#EXTINF:0,HTVC Ph
http://192.168.1.7:1234/udp/225.1.1.171:30120
" +
"#EXTINF:0,HTVC Phim (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.184:30120
" +
"#EXTINF:0,HTVC Phim (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.3.68:30120
" +
"#EXTINF:0,HTVC Thu
http://192.168.1.7:1234/udp/225.1.1.186:30120
" +
"#EXTINF:0,HTVC Thu
http://192.168.1.7:1234/udp/225.1.3.28:30120
" +
"#EXTINF:0,HTVC+ (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.181:30120
" +
"#EXTINF:0,HY _ TH H
http://192.168.1.7:1234/udp/225.1.1.118:30120
" +
"#EXTINF:0,KBS World (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.196:30120
" +
"#EXTINF:0,KG _ TH Kiên Giang (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.182:30120
" +
"#EXTINF:0,KRT _ TH Kon Tum (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.36:30120
" +
"#EXTINF:0,KTV HD _ TH Khánh Hòa (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.133:30120
" +
"#EXTINF:0,LA34 _ TH Long An
http://192.168.1.7:1234/udp/225.1.1.162:30120
" +
"#EXTINF:0,LSTV HD _ TH L
http://192.168.1.7:1234/udp/225.1.1.160:30120
" +
"#EXTINF:0,LTV HD _ TH Lai Châu (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.36:30120
" +
"#EXTINF:0,LTV HD _ TH Lâm
http://192.168.1.7:1234/udp/225.1.2.177:30120
" +
"#EXTINF:0,NHK World Japan (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.47:30120
" +
"#EXTINF:0,NTV HD _ TH Ngh
http://192.168.1.7:1234/udp/225.1.2.183:30120
" +
"#EXTINF:0,NTV HD _ TH Ninh Bình (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.185:30120
" +
"#EXTINF:0,NTV HD _ TH Ninh Thu
http://192.168.1.7:1234/udp/225.1.2.178:30120
" +
"#EXTINF:0,Outdoor Channel (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.215:30120
" +
"#EXTINF:0,PTQ _ TH Qu
http://192.168.1.7:1234/udp/225.1.2.174:30120
" +
"#EXTINF:0,PTV HD _ TH Phú Th
http://192.168.1.7:1234/udp/225.1.2.165:30120
" +
"#EXTINF:0,QPVN (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.217:30120
" +
"#EXTINF:0,QPVN (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.3.54:30120
" +
"#EXTINF:0,QRTV HD _ TH Qu
http://192.168.1.7:1234/udp/225.1.1.117:30120
" +
"#EXTINF:0,QTV1 HD _ TH Qu
http://192.168.1.7:1234/udp/225.1.2.181:30120
" +
"#EXTINF:0,QTV3 HD _ TH Qu
http://192.168.1.7:1234/udp/225.1.2.180:30120
" +
"#EXTINF:0,Qu
http://192.168.1.7:1234/udp/225.1.3.78:30120
" +
"#EXTINF:0,SCTV6 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.188:30120
" +
"#EXTINF:0,SCTV6 (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.3.34:30120
" +
"#EXTINF:0,STV _ TH S
http://192.168.1.7:1234/udp/225.1.1.98:30120
" +
"#EXTINF:0,STV1 _ TH Sóc Tr
http://192.168.1.7:1234/udp/225.1.1.159:30120
" +
"#EXTINF:0,TH
http://192.168.1.7:1234/udp/225.1.1.163:30120
" +
"#EXTINF:0,TH
http://192.168.1.7:1234/udp/225.1.1.210:30120
" +
"#EXTINF:0,THLC _ TH Lào Cai (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.119:30120
" +
"#EXTINF:0,THP HD _ TH TP. H
http://192.168.1.7:1234/udp/225.1.1.44:30120
" +
"#EXTINF:0,THP HD _ TH TP. H
http://192.168.1.7:1234/udp/225.1.3.80:30120
" +
"#EXTINF:0,THP+ HD _ TH TP. H
http://192.168.1.7:1234/udp/225.1.1.113:30120
" +
"#EXTINF:0,THTG HD _ TH Ti
http://192.168.1.7:1234/udp/225.1.3.46:30120
" +
"#EXTINF:0,THTPCT HD _ TH TP. C
http://192.168.1.7:1234/udp/225.1.1.132:30120
" +
"#EXTINF:0,THTV HD _ TH Trà Vinh (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.172:30120
" +
"#EXTINF:0,THVL1 HD _ TH V
http://192.168.1.7:1234/udp/225.1.1.155:30120
" +
"#EXTINF:0,THVL2 HD _ TH V
http://192.168.1.7:1234/udp/225.1.1.154:30120
" +
"#EXTINF:0,THVL3 HD _ TH V
http://192.168.1.7:1234/udp/225.1.1.235:30120
" +
"#EXTINF:0,THVL4 HD _ TH V
http://192.168.1.7:1234/udp/225.1.2.25:30120
" +
"#EXTINF:0,TLC (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.236:30120
" +
"#EXTINF:0,TN1 HD _ TH Thái Nguyên (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.179:30120
" +
"#EXTINF:0,TRT _ TH Th
http://192.168.1.7:1234/udp/225.1.1.161:30120
" +
"#EXTINF:0,TTV _ TH Thanh Hóa
http://192.168.1.7:1234/udp/225.1.2.184:30120
" +
"#EXTINF:0,TTV _ TH Tuyên Quang (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.2.188:30120
" +
"#EXTINF:0,TV5 Monde Asie (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.200:30120
" +
"#EXTINF:0,Thanh Hóa
http://192.168.1.7:1234/udp/225.1.4.162:30120
" +
"#EXTINF:0,The Mira Hotel
http://192.168.1.7:1234/udp/225.1.1.123:30120
" +
"#EXTINF:0,The Ocean Resort
http://192.168.1.7:1234/udp/225.1.1.121:30120
" +
"#EXTINF:0,WBTV (HD 8Mbps)
http://192.168.1.7:1234/udp/225.1.1.139:30120
"
";

  var channels = [];
  var currentIndex = 0;
  var numInput = "";
  var numTimeout = null;
  var IDLE_TIMEOUT = 1e4;
  var idleTimer = null;
  var isPlaying = false;
  var player = null;
  var listEl = null;
  var nowEl = null;
  var statusEl = null;

  var KEY_MAP = {
    13: "Enter",
    27: "Escape",
    32: " ",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    10009: "Escape",
    10190: "MediaPlayPause",
    10252: "MediaPlayPause",
    427: "ChannelUp",
    428: "ChannelDown",
    447: "VolumeUp",
    448: "VolumeDown"
  };

  function getPlaylistUrl() {
    var params = {};
    location.search.substr(1).split("&").forEach(function (p) {
      var kv = p.split("=");
      if (kv[0]) params[decodeURIComponent(kv[0])] = kv[1] ? decodeURIComponent(kv[1]) : "";
    });
    return params.url || DEFAULT_PLAYLIST;
  }

  function injectStyles() {
    var s = document.createElement("style");
    s.textContent = '*{margin:0;padding:0;box-sizing:border-box}body{background:#1a1a1a;color:#fff;font-family:Arial,Helvetica,sans-serif;height:100vh;overflow:hidden}#app{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;height:100vh}header{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px 24px;background:#111;border-bottom:1px solid #333}header h1{font-size:28px;font-weight:600}#main{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}#player-wrap{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#000;min-width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1}#player{width:100%;height:70vh;max-height:70vh;background:#000}#list{width:320px;background:#111;border-left:1px solid #333;overflow-y:auto;padding:8px 0}.grp{padding:8px 16px 4px;font-size:18px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:1px}.ch{display:block;width:100%;padding:12px 16px;border:none;background:none;color:#fff;font-size:24px;text-align:left;cursor:pointer}.ch:hover,.ch:focus{background:#333;outline:none}.ch.on{background:#2a2a2a;border-left:4px solid #ffd600;padding-left:12px}.ch:focus{outline:3px solid #ffd600}html[data-tv="true"] .ch:focus{outline:3px solid #ffd600}#bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:10px 24px;background:#111;border-top:1px solid #333;font-size:20px}#now{color:#ffd600;font-weight:500}#status{color:#888}#app.fullscreen-mode header,#app.fullscreen-mode #list,#app.fullscreen-mode #bar{display:none}#app.fullscreen-mode #main{display:block;height:100vh}#app.fullscreen-mode #player-wrap{width:100vw;height:100vh}#app.fullscreen-mode #player{width:100vw;height:100vh;max-height:none}';
    document.head.appendChild(s);
  }

  function buildUI() {
    injectStyles();
    document.body.innerHTML = '<div id="app"><header><h1>IPTV Player</h1><span id="cnt"></span></header><div id="main"><div id="player-wrap"><video id="player" controls></video></div><aside id="list"></aside></div><footer id="bar"><span id="now">No channel selected</span><span id="status">Ready</span></footer></div>';
    player = document.getElementById("player");
    listEl = document.getElementById("list");
    nowEl = document.getElementById("now");
    statusEl = document.getElementById("status");
  }

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function setNowPlaying(msg) {
    if (nowEl) nowEl.textContent = msg;
  }

  function enterFullscreen() {
    var app = document.getElementById("app");
    if (app) app.className = "fullscreen-mode";
  }

  function exitFullscreen() {
    var app = document.getElementById("app");
    if (app) app.className = "";
  }

  function resetIdle() {
    if (idleTimer) clearTimeout(idleTimer);
    exitFullscreen();
    if (isPlaying) idleTimer = setTimeout(enterFullscreen, IDLE_TIMEOUT);
  }

  function loadPlaylist() {
    var url = getPlaylistUrl();
    var useFallback = (url === DEFAULT_PLAYLIST);
    setStatus("Fetching playlist...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          channels = parseM3U(xhr.responseText);
          renderChannelList();
          setStatus("Ready - " + channels.length + " channels");
          setNowPlaying(channels.length > 0 ? "Select a channel" : "No channels found");
        } else if (useFallback) {
          setStatus("Error: HTTP " + xhr.status + " - using fallback");
          channels = parseM3U(FALLBACK_M3U);
          renderChannelList();
          setStatus("Fallback loaded - " + channels.length + " channels");
          setNowPlaying(channels.length > 0 ? "Select a channel" : "No channels found");
        } else {
          setStatus("Error: HTTP " + xhr.status);
        }
      }
    };
    xhr.onerror = function () {
      if (useFallback) {
        setStatus("Error: Network failed - using fallback");
        channels = parseM3U(FALLBACK_M3U);
        renderChannelList();
        setStatus("Fallback loaded - " + channels.length + " channels");
        setNowPlaying(channels.length > 0 ? "Select a channel" : "No channels found");
      } else {
        setStatus("Error: Network failed");
      }
    };
    xhr.send();
  }

  function parseM3U(content) {
    var lines = content.split(/\r?\n/);
    var result = [];
    var idx = 0;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line.indexOf("#EXTINF:") === 0) {
        var nameMatch = line.match(/#EXTINF:-?\d+[^,]*,(.*)/);
        if (nameMatch) {
          var name = nameMatch[1].trim();
          var groupMatch = line.match(/group-title="([^"]*)"/);
          var logoMatch = line.match(/tvg-logo="([^"]*)"/);
          var skip = 1;
          while (lines[i + skip] && lines[i + skip].trim().indexOf("#") === 0) skip++;
          var url = lines[i + skip] ? lines[i + skip].trim() : "";
          if (url && url.indexOf("#") !== 0) {
            result.push({
              name: name,
              url: url,
              group: groupMatch ? groupMatch[1] : guessGroup(name),
              logo: logoMatch ? logoMatch[1] : "",
              index: idx
            });
            idx++;
            i += skip;
          }
        }
      }
    }
    return result;
  }

  function guessGroup(name) {
    var n = name.toUpperCase();
    if (n.indexOf("VTV") === 0) return "VTV";
    if (n.indexOf("HTVC") === 0) return "HTVC";
    if (n.indexOf("HTV") === 0) return "HTV";
    if (n.indexOf("SCTV") === 0) return "SCTV";
    if (n.indexOf("THVL") === 0) return "THVL";
    if (n.indexOf("BTV") === 0) return "BTV";
    if (n.indexOf("KTV") === 0) return "KTV";
    if (n.indexOf("NTV") === 0) return "NTV";
    if (n.indexOf("BBC") === 0) return "BBC";
    if (n.indexOf("K+") === 0) return "K+";
    if (n.indexOf("CNN") === 0) return "CNN";
    return "Other";
  }

  function groupChannels(arr) {
    var groups = {};
    for (var i = 0; i < arr.length; i++) {
      var g = arr[i].group || guessGroup(arr[i].name);
      if (!groups[g]) groups[g] = [];
      groups[g].push(arr[i]);
    }
    return groups;
  }

  function renderChannelList() {
    if (!listEl) return;
    listEl.innerHTML = "";
    var groups = groupChannels(channels);
    var total = 0;
    var keys = Object.keys(groups).sort();
    for (var i = 0; i < keys.length; i++) {
      var grpName = keys[i];
      var grpDiv = document.createElement("div");
      grpDiv.className = "grp";
      grpDiv.textContent = grpName;
      listEl.appendChild(grpDiv);
      var chs = groups[grpName];
      for (var j = 0; j < chs.length; j++) {
        var ch = chs[j];
        var btn = document.createElement("button");
        btn.className = "ch";
        btn.textContent = (total + 1) + ". " + ch.name;
        btn.setAttribute("data-idx", String(ch.index));
        btn.onclick = makePlayHandler(ch.index);
        btn.onfocus = makeFocusHandler(ch.index);
        listEl.appendChild(btn);
        total++;
      }
    }
    var cnt = document.getElementById("cnt");
    if (cnt) cnt.textContent = channels.length + " channels";
    focusCurrent();
  }

  function makePlayHandler(idx) {
    return function () {
      playChannel(idx);
    };
  }

  function makeFocusHandler(idx) {
    return function () {
      currentIndex = idx;
      highlightChannel(idx);
    };
  }

  function highlightChannel(idx) {
    var items = document.querySelectorAll(".ch");
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      var id = parseInt(el.getAttribute("data-idx") || "-1", 10);
      el.className = id === idx ? "ch on" : "ch";
      if (id === idx) el.scrollIntoView(false);
    }
  }

  function playChannel(idx) {
    if (idx < 0 || idx >= channels.length || !player) return;
    isPlaying = true;
    currentIndex = idx;
    var ch = channels[idx];
    highlightChannel(idx);
    setNowPlaying("Now Playing: " + ch.name);
    setStatus("Loading stream...");
    player.src = ch.url;
    player.onerror = function () {
      var err = player.error;
      setStatus("Error: " + (err ? err.message || "code " + err.code : "unknown"));
    };
    player.oncanplay = function () {
      setStatus("Playing");
    };
    var p = player.play();
    if (p && p.catch) p.catch(function (err) {
      setStatus("Error: " + (err && err.message ? err.message : "play failed"));
    });
    resetIdle();
  }

  function changeChannel(delta) {
    if (channels.length === 0) return;
    var n = currentIndex + delta;
    if (n < 0) n = channels.length - 1;
    if (n >= channels.length) n = 0;
    playChannel(n);
    focusCurrent();
  }

  function focusCurrent() {
    var items = document.querySelectorAll(".ch");
    for (var i = 0; i < items.length; i++) {
      var id = parseInt(items[i].getAttribute("data-idx") || "-1", 10);
      if (id === currentIndex) {
        items[i].focus();
        return;
      }
    }
    if (items.length > 0) items[0].focus();
  }

  function togglePlay() {
    if (!player) return;
    if (player.paused) {
      var p = player.play();
      if (p && p.catch) p.catch(function () {});
    } else {
      player.pause();
    }
  }

  function seek(delta) {
    if (player) player.currentTime = Math.max(0, player.currentTime + delta);
  }

  function adjustVolume(delta) {
    if (player) player.volume = Math.max(0, Math.min(1, player.volume + delta));
  }

  function flushNumInput() {
    if (numInput) {
      var n = parseInt(numInput, 10);
      numInput = "";
      if (n >= 1 && n <= channels.length) {
        playChannel(n - 1);
        focusCurrent();
      }
    }
  }

  function handleKey(e) {
    resetIdle();
    var key = e.key && e.key !== "Unidentified" ? e.key : KEY_MAP[e.keyCode];
    if (!key) return;
    switch (key) {
      case "ArrowUp":
      case "ChannelUp":
        e.preventDefault();
        changeChannel(-1);
        break;
      case "ArrowDown":
      case "ChannelDown":
        e.preventDefault();
        changeChannel(1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        seek(-10);
        break;
      case "ArrowRight":
        e.preventDefault();
        seek(10);
        break;
      case "Enter":
        e.preventDefault();
        playChannel(currentIndex);
        break;
      case " ":
      case "MediaPlayPause":
      case "MediaPlay":
      case "MediaPause":
        e.preventDefault();
        togglePlay();
        break;
      case "VolumeUp":
        e.preventDefault();
        adjustVolume(0.1);
        break;
      case "VolumeDown":
        e.preventDefault();
        adjustVolume(-0.1);
        break;
      case "Backspace":
      case "Escape":
        e.preventDefault();
        focusCurrent();
        break;
      default:
        if (key && key >= "0" && key <= "9") {
          e.preventDefault();
          numInput += key;
          if (numTimeout) clearTimeout(numTimeout);
          numTimeout = setTimeout(flushNumInput, 1000);
        }
        break;
    }
  }

  function registerTizenKeys() {
    try {
      var tizen = window.tizen && window.tizen.tvinputdevice;
      if (!tizen) return;
      var keys = ["MediaPlay", "MediaPause", "MediaStop", "ChannelUp", "ChannelDown"];
      for (var i = 0; i < keys.length; i++) tizen.registerKey(keys[i]);
    } catch (e) {}
  }

  function init() {
    buildUI();
    registerTizenKeys();
    document.addEventListener("keydown", handleKey);
    document.addEventListener("click", resetIdle);
    document.addEventListener("mousemove", resetIdle);
    loadPlaylist();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
