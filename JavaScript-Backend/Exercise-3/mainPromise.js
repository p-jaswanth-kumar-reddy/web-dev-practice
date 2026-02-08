import fs from "fs/promises";
let a=await fs.readFile("jashu.txt");
let b=await fs .appendFile("jashu.txt","\n\nThis is a promise")
console.log(a.toString(),b);