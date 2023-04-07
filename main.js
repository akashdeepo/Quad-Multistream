const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// The following code is not necessary for the current functionality
// ipcMain.on('request-fullscreen', (event, index) => {
//   console.log('Request fullscreen for box ' + index);
// });

// ipcMain.on('exit-fullscreen', (event, index) => {
//   console.log('Exit fullscreen for box ' + index);
// });
