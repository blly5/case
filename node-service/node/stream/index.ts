const fs = require('fs');
const file = fs.createWriteStream('./1.txt');

for(let i =0; i < 1e6; i++) {
    file.write(`location:${i}`);
};
file.end();