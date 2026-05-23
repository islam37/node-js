const fs =require('fs');
const data = fs.readFileSync('./file.text','utf-8');
console.log(data);
console.log('done reading file');   


//write file 

// fs.writeFile('./new.txt',"hello node js file system",(err)=>{
//     if(err)
// {
//     console.log(err);
//     return;
// }

// console.log("file created");
// });

//appned 



fs.appendFile("new.txt", "\nNew Line Added", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Content added");
});
