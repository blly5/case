/*
 * @Author: Blue 
 * @Date: 2019-09-06 17:35:22 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-09-06 17:46:35
 */

const {app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    heihgt: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.on('ready', createWindow);