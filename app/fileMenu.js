module.exports = {
  fileMenu,
  newFile,
  handleNew,
  handleSave,
  handleSaveAs
}
let saveFlag
const getSavePath = () => savePath
const setSavePath = (path) => {
  savePath = path
}

function fileMenu() {
  document.getElementById('save').addEventListener('click', handleSave)
  document.getElementById('save-as').addEventListener('click', handleSaveAs)
  document.getElementById('new').addEventListener('click', handleNew)
  document.getElementById('close-window').addEventListener('click', function(e) {
    window.close()
  })
}

function handleNew(i) {
  if (false) {
    newFile()
    editor[i].setValue('')
  }
  else {
    window.open(path.join('file://', __dirname, '/index.html'))
  }
}

function handleSaveAs() {
  var path = dialog.showOpenDialog({
    properties: ['openDirectory']
  })
  if (path !== undefined) {
    saveFlag = true
    setSavePath(path)
    handleSave()
  }
}

function handleSave() {
  if (saveFlag === true) {
    var path = getSavePath()
    var htmlString = '<!-- Yogurt UI Component -->\n\n' + html.getValue() + JSMenu.getJsLibs()
    // Write HTML
    fs.writeFile(path + '/yogurt_prototype_component.html', htmlString, (err) => {
      if (err) {
        console.error(err)
      }
      // console.log('success HTML')
    })
    // Write CSS
    fs.writeFile(path + '\\style.css', css.getValue(), (err) => {
      if (err) {
        console.error(err)
      }
      // console.log('success CSS')
    })
    // Write JS
    fs.writeFile(path + '\\script.js', js.getValue(), (err) => {
      if (err) {
        console.error(err)
      }
      // console.log('success JS')
    })
    for (var j = 0; j < styFlags.length; j++) {
      if (styFlags[j] === 1) {
        fs.createReadStream('resources/app.asar/app/lib/' + cssLib[j][0]).pipe(fs.createWriteStream(path + '/' + cssLib[j][0]))
        if (j === 1) {
          fs.createReadStream('resources/app.asar/app/lib/glyphicons-halflings-regular.eot').pipe(fs.createWriteStream(path + '/glyphicons-halflings-regular.eot'))
          fs.createReadStream('resources/app.asar/app/lib/glyphicons-halflings-regular.ttf').pipe(fs.createWriteStream(path + '/glyphicons-halflings-regular.tff'))
          fs.createReadStream('resources/app.asar/app/lib/glyphicons-halflings-regular.woff').pipe(fs.createWriteStream(path + '/glyphicons-halflings-regular.woff'))
          fs.createReadStream('resources/app.asar/app/lib/glyphicons-halflings-regular.woff2').pipe(fs.createWriteStream(path + '/glyphicons-halflings-regular.woff2'))
        }
        if (j === 2) {
          fs.createReadStream('resources/app.asar/app/lib/fontawesome-webfont.ttf').pipe(fs.createWriteStream(path + '/fontawesome-webfont.ttf'))
          fs.createReadStream('resources/app.asar/app/lib/fontawesome-webfont.woff').pipe(fs.createWriteStream(path + '/fontawesome-webfont.woff'))
          fs.createReadStream('resources/app.asar/app/lib/fontawesome-webfont.woff2').pipe(fs.createWriteStream(path + '/fontawesome-webfont.woff2'))
        }
      }
    }
    for (var i = 0; i < scrFlags.length; i++) {
      if (scrFlags[i] === 1) {
        fs.createReadStream('resources/app.asar/app/lib/' + jsLib[i][0]).pipe(fs.createWriteStream(path + '/' + jsLib[i][0]))
      }
    }
    dialog.showMessageBox({
      message: 'Saved to ' + path + '/',
      buttons: ['OK']
    })
  }
  else {
    handleSaveAs()
  }
}

function newFile() {
  fileEntry = null
  hasWriteAccess = false
}
