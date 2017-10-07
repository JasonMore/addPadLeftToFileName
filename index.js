const path = '/Users/jasonmore/Desktop/2017'

const fs = require('fs')

// get dir ~/Desktop/2015
fs.readdir(path, (err, files) => {
  console.log('files', files)

  files.forEach(file =>{
    const match = /(a20\d\d_ - )(\d+)(.*)/.exec(file)
    if(!match ) return
    const newNumber = leftpad(match[2], 4, '0')

    const originalPath = `${path}/${file}`
    const newPath = `${path}/${match[1]}${newNumber}${match[3]}`

    fs.rename(originalPath,newPath, err =>{
      if(err) return console.error(err, originalPath, newPath)
      console.log(`renamed: ${originalPath}, new: ${newPath}`)
    })

  })

  // each file, get filename ex: n2015_ - 2.jpg
// change n2015_ - 2.jpg to n2015_ - 0002.jpg
})


function leftpad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}