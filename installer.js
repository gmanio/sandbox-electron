var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './build/sandbox-electron-win32-ia32',
  outputDirectory: './build/installer32',
  authors: 'My App Inc.',
  exe: 'sandbox-electron.exe',
  setupExe: 'MyAppSetup.exe'
});

resultPromise.then(function () {
  console.log("It worked!");
}, function (e) {
  console.log('No dice: ' + e.message);
});
