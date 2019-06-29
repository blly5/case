var fs = require('fs');
var file = fs.createWriteStream('./1.txt');
for (var i = 0; i < 1e6; i++) {
    file.write("location:" + i);
}
;
file.end();
