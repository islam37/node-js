const fs= require('fs')

// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Folder created");
// });

// fs.rmdir("myFolder", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Folder deleted");
// });
// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(files);
// });


//sync vs async 
//sync

const data = fs.readFileSync('./file.text', 'utf-8');
console.log(data);


//async
fs.readFile('./file.text','utf-8',(err, data) => {
  
    console.log(data);
   
  })
  console.log('done reading file');
