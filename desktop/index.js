/*
 * @Author: Blue 
 * @Date: 2019-09-06 17:35:22 
 * @Last Modified by: Blue
 * @Last Modified time: 2020-03-28 19:36:27
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
  
  createWindow()
  // 隐藏菜单栏
  const { Menu } = require('electron');
  Menu.setApplicationMenu(null);
  // hide menu for Mac 
  if (process.platform !== 'darwin') {
    app.dock.hide();
  }

}

app.on('ready', createWindow);