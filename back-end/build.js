const fs = require('fs-extra');
const path = require('path');

fs.emptyDirSync(path.resolve(__dirname,"dist"));
fs.copySync(path.resolve(__dirname,"src"),path.resolve(__dirname,"dist"));

//remove the script build from package.json
let file = fs.readFileSync(path.resolve(__dirname,"package.json"), 'utf8');
obj = JSON.parse(file); //now it an object
obj.scripts.build="";
let json = JSON.stringify(obj); //convert it back to json
fs.writeFileSync(path.resolve(__dirname,"dist/package.json"), json, 'utf8'); // write it back 

fs.copySync(path.resolve(__dirname,"package-lock.json"),path.resolve(__dirname,"dist/package-lock.json"));