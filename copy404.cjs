console.log('→ copy404.js started');

const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');
console.log('distDir =', distDir);

const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

console.log('indexPath =', indexPath);
console.log('notFoundPath =', notFoundPath);

if (fs.existsSync(indexPath)) {
  console.log('✔ index.html exists, copying...');
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✔ 404.html created');
} else {
  console.log('✖ index.html does NOT exist — cannot create 404.html');
}
