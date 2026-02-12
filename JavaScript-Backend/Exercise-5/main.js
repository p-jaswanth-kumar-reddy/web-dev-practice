const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog);
app.use('/shop', shop);

app.get('/', (req, res) => {
    console.log("hey its a get request");
    res.send("Hello World21!");
}).post('/About', (req, res) => {
    console.log("Hey its a post request");
    res.send("Hello world post!!");
})
app.put('/', (req, res) => {
    console.log("hey its a put request");
    res.send("Hello world put!!");
})
app.get("/index", (req, res) => {
    console.log("Hey its a html file nemed index.html");
    res.sendFile('templates/index.html', { root: __dirname })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
