const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/data'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

console.log('Directories created successfully');
