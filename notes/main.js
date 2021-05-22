const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const startUrl = process.env.ELECTRON_START_URL || URL.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.removeMenu();
    mainWindow.loadURL(startUrl);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow();
  
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});