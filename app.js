#!/usr/bin/env node

const {
  app,
  BrowserWindow,
  Menu,
  Tray,
  nativeTheme
} = require('electron');

const express = require('express');
const server = express();
const path = require('path');

const views = __dirname + '/dist/';

server.use(express.static(views));

server.get('/', (req, res) => {
  res.sendFile(views + 'index.html');
});

// throw err
server.use((err, req, res) => {
  if (err) {
    throw err;
  }
  res.sendFile(views + 'index.html');
});

// create random port
const port = server.listen(0, () => {
  console.log('[playground] listening on port:', port.address().port);
});

// electron
let win, createWindow, tray;

nativeTheme.themeSource = 'light';

createWindow = () => {
  win = new BrowserWindow({
    title: 'Yogurt Playground',
    icon: path.join(__dirname, 'assets/favicon.png'),
    backgroundColor: '#262626',
    width: 1280,
    height: 700,
    frame: true,
    webgl: true,
    show: true,
    webPreferences: {
      javascript: true,
      plugins: true,
      zoomFactor: 1,
      nodeIntegration: false,
    },
  });

  win.maximize();
  win.loadURL('http://127.0.0.1:' + port.address().port);

  // custom menu bar
  const template = [
    {
      label: 'Playground',
      submenu: [{ role: 'minimize' }, { role: 'quit' }],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click() {
            require('electron').dialog.showMessageBox({
              type: 'info',
              buttons: ['Close'],
              defaultId: 2,
              title: 'About',
              message: 'Yogurt Playground Desktop App (build v0.1.3-beta)',
              detail:
                'A developer playground IDE for testing and prototyping with Yogurt CSS framework.\n\n(https://github.com/yogurt-foundation/playground)',
            });
          },
        },
        {
          label: 'Yogurt CSS Documentation',
          click() {
            require('electron').shell.openExternal(
              'https://yogurtcss.netlify.app'
            );
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // tray menu
  win.on('minimize', (event) => {
    event.preventDefault();
    win.hide();
  });
  win.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      win.hide();
    }
    return false;
  });
  tray = new Tray('assets/favicon.png');
  let contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        win.show();
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.isQuiting = true;
        app.quit();
      },
    },
  ]);
  tray.setToolTip('Yogurt Playground');
  tray.setContextMenu(contextMenu);
};

app.on('ready', createWindow);

// closed properly if requested by the OS or user
app.on('before-quit', () => {
  isQuiting = true;
});
// quit when all windows are closed
app.on('window-all-closed', () => {
  if (app.listeners('window-all-closed').length === 1 && !option.interactive) {
    app.quit();
  }
});
app.on('activate', () => {
  // dock icon is clicked and there are no other windows open
  if (win === null) {
    createWindow();
  }
});
