#!/usr/bin/env node

const { app, BrowserWindow, Menu, nativeTheme } = require('electron');
const express = require('express');
const server = express();
const path = require('path');

// http
const views = __dirname + '/app/';
server.use(express.static(views));
server.get('/', (req, res) => {
  res.sendFile(views + 'index.html');
});
server.use((err, req, res) => {
  if (err) { throw err; }
  res.sendFile(views + 'index.html');
});
const port = server.listen(8809, () => { // create fixed port (0 is random)
  console.log('[playground] listening on port:', port.address().port);
});

let win, createWindow;
let appHomeURL = 'http://0.0.0.0:' + port.address().port;
let appAboutURL = 'http://0.0.0.0:' + port.address().port + '/#/about';

createWindow = () => {

  nativeTheme.themeSource = 'light'; // set default theme

  win = new BrowserWindow({
    title: 'Yogurt Playground',
    icon: path.join(__dirname, 'assets/favicon.png'),
    backgroundColor: '#262626',
    width: 1280,
    height: 700,
    frame: true,
    webgl: true,
    show: true,
    devTools: true,
    webPreferences: {
      javascript: true,
      plugins: true,
      zoomFactor: 1,
      nodeIntegration: true,
    },
  });

  const template = [
    {
      label: 'Playground',
      submenu: [
        {
          label: 'Editor',
          accelerator: 'Ctrl+Alt+M',
          click() {
            win.loadURL(appHomeURL);
          }
        },
        { type: 'separator' },
        { role: 'minimize' },
        { role: 'quit' }
      ],
    },
    {
      label: 'View',
      submenu: [
        { type: 'separator' },
        { role: 'reload' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { role: 'togglefullscreen' },
        { type: 'separator' },
        { role: 'toggledevtools' }
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click() {
            win.loadURL(appAboutURL);
          }
        },
      ]
    }
  ];

  // menu bar
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // load app
  win.maximize();
  win.loadURL(appHomeURL);
};

// handlers
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
