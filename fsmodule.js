
const fs= require('fs');

// fs.readFile('file.txt','utf8',(Error,Mydata)=>{
//     console.log(Error, Mydata);
// })

// console.log("Finished Reading File"); 
// // nodejs nonblocking i/o model
// const a = fs.readFileSync('file.txt');
// console.log(a.toString());
// console.log("Finished Reafing File");

fs.writeFile('file1.txt',"this  the daya i m writing",()=>{
    console.log('Data wriiten Successfully');
});
 
fs.writeFileSync('file.txt','My dear Brothers and Sisters');