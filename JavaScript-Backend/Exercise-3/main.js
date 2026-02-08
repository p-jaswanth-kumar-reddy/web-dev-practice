const fs=require('fs');
console.log("starting");
fs.writeFile("jashu.txt","I am agood boy",()=>{
    console.log("done");
    fs.readFile("jashu.txt",(error,data)=>{
        console.log(error,data.toString());
    });
});
fs.appendFile("jashu.txt","I am 19",(e,d)=>{
    console.log(d);
});
console.log("ending");