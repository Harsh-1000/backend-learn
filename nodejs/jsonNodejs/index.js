const bioData = {
    name : "binod",
    age: 22,
    channel: "thapa technical"
};

// console.log(bioData.name);

const jsonData = JSON.stringify(bioData);

console.log(jsonData);

// const objData = JSON.parse(jsonData);

// console.log(objData);

const fs = require("fs");

// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log("done");
// })

fs.readFile("json1.json","UTF-8",(err,jsonData)=>{
    const objData = JSON.parse(jsonData);
    console.log(objData);
})

