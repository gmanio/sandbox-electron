const { app, BrowserWindow } = require('electron');
const client                 = require('electron-connect').client;
debugger;
app.on('ready', function () {
  console.log(process.argv.join(', '));
  console.log('Hello, browser process');
  var mainWindow = new BrowserWindow({
    width: 400,
    height: 300
  });
  // mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.loadURL('http://m.naver.com');
  // Connect to server process
  client.create(mainWindow);
});

