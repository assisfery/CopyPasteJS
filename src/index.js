var fs = require('fs');
 
// Read and eval library
filedata = fs.readFileSync('./CopyPasteJS.js','utf8');
eval(filedata);
 
exports = CopyPasteJS;

console.log(exports);