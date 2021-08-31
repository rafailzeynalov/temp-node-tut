const path = require('path');

console.log(path.sep);  // platform path separator

const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log("filePath : ", filePath);

const base = path.basename(filePath);
console.log("base : ", base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('absolute : ', absolute);