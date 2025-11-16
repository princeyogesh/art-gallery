const fs = require('fs');
const path = require('path');

const jpegDir = path.join(__dirname, '../public/JPEG/Jpeg');
const outputFile = path.join(__dirname, '../public/paintings.json');
console.log('Generating paintings.json from JPEG directory...', jpegDir);
fs.readdir(jpegDir, (err, files) => {
  if (err) throw err;

  const paintings = files
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => ({
      imagename: `JPEG/Jpeg/${file}`,
      title: path.parse(file).name.replace(/[_\-]/g, ' ')
    }));

  fs.writeFileSync(outputFile, JSON.stringify(paintings, null, 2));
  console.log(`Updated paintings.json with ${paintings.length} entries.`);
});