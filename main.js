var fs = require('fs')
var imtype = require('imtype')

const localappdata = process.env["localappdata"]

const SPOTLIGHT_PATH = localappdata + '/Packages/Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy/LocalState/Assets'

var files = fs.readdirSync(SPOTLIGHT_PATH)
files.forEach(file => {
  // console.log(file)
  var fullpath = SPOTLIGHT_PATH + '/' + file;
  try
  {
    // isJPG;
    var data = fs.readFileSync(fullpath);
    if (imtype.isJPG(data)) {
      copyFiles(file + '.jpg', data)
    }
    if (imtype.isPNG(data)) {
      copyFiles(file + '.png', data)
    }
    if (imtype.isGIF(data)) {
      copyFiles(file + '.gif', data)
    }
    if (imtype.isBMP(data)) {
      copyFiles(file + '.bmp', data)
    }
    if (imtype.isTIF(data)) {
      copyFiles(file + '.tif', data)
    }
  } catch(e) {
    console.error(e)
  }
})

function copyFiles(file, data) {
  if (!fs.existsSync('./pics/')) {
    fs.mkdirSync('pics')
  }
  fs.writeFileSync('pics/' + file, data)
}