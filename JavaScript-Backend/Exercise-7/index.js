const express=require("express");
const app=express();
const port=3000;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    let sitename="adidas";
    let searchText="search now";
    let arr=["hey",54,64];
    res.render("index",{sitename:sitename,searchText:searchText,arr});
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})