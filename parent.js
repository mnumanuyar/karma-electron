// Turned out we were fucked from the start =/
//   https://github.com/electron/electron/issues/4218
// Need to move to a temporary file
// Can pass it in as a parameter to load
var electronPrebuilt = require('electron');
var execSync = require('child_process').execSync;
var path = require('path');

execSync(electronPrebuilt + ' ' + path.join(__dirname, 'lib', 'child.js'), {stdio: ['pipe', 'inherit', 'inherit']});