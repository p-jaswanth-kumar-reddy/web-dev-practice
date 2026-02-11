const express=require("express");
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello World!!");
})
app.get('/About',(req,res)=>{
    res.send("Hello About!!");
})
app.get('/Blog',(req,res)=>{
    res.send("Hello Blog!!");
})
app.get('/Blog/:Slug',(req,res)=>{
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug}`)
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})
