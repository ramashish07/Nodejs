const path = require("path")

// 1. path.join-- it joinsins multiple path segment togetther 

const  filepath = path.join('\\my','directoryname','filename.txt');
console.log('filepath_join:-',filepath);

// 2. path .resolve  resolve the path into segments into an  absolute paths 
 const filepath2 = path.resolve('myFolder','myfile.txt');
 console.log('filepath_resolve:-',filepath2);

 //3. path.dirname (path)
  // returns the directory of a given path 
const dirname = path.dirname('/my/directory/file.txt');
console.log('directory_name:-',dirname);

//4. path.basename 
// returns the last portion of a path 
const basename = path.basename('/my/directory/file.txt');
console.log('Basename:',basename);

// 5.  path.extname 
// returns  the extentsion of a path 
 const ext_name = path.extname('/my/directory/file.txt');
 console.log('Extension_name:', ext_name);

 //6. path.parse
// parse a path into an object  containing its different componenets 
const pathParse = path.parse('/my/directory/file.txt');
console.log('PathParsed:',pathParse);