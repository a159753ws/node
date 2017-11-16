var fs = require("fs");
var text = '';
var input = '我爱你';

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

readerStream.setEncoding('UTF8');


readerStream.on('data', function(chunk) {
	text += chunk;
});

writerStream.write(input, 'UTF8');
writerStream.end();

readerStream.on('end', function(chunk) {
	console.log(text);
});

writerStream.on('finish', function() {
	console.log('Done writing!');
});



console.log("END\n");
