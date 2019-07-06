const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

let win;

function createWindow () {
  // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        icon: 'assets/icon.ico',
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true            
        }
    })
  
    setupIPC();

    win.loadFile(path.join(__dirname, 'index.html'))
}

function setupIPC(){
    ipcMain.on('execute', function(event, task) {        
        switch(task.task){
            case 'close':
                win.close();
                break;
            case 'minimize':
                win.minimize();
                break;
            case 'switch':
                win.isMaximized() ? win.unmaximize() : win.maximize();
                break;
        }
    })
}

app.on('ready', createWindow)