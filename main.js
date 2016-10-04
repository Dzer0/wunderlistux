
const {app, BrowserWindow, dialog} = require('electron');

let mainWindow;

let quitApp = function(){ app.quit(); };

app.on('window-all-closed', quitApp);

app.on('ready', function() {
  var size = { width: 800, height: 592 };
  mainWindow = new BrowserWindow({
    trasnparent: true,
    width: size.width,
    height: size.height,
    frame: false,
    minWidth: size.width,
    minHeight: size.height,
    maxWidth: size.width,
    maxHeight: size.height,
    radii: [10,10,10,10]
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // mainWindow.openDevTools();
});
