const server=require("express")
const path=require("path")
const bodyparser=require("body-parser")
const app=server()
const pathfinder=path.join(__dirname,'client')
app.use(bodyparser.urlencoded({extended:true}))


app.get("/start",(req,res)=>{
    res.sendFile(`${pathfinder}/index.html`)
});
app.post("/start",(req,res)=>{
    const body=req.body;
    console.log("submitted with:",body);
    res.redirect("/start2");
});
app.get("/start2",(req,res)=>{
    res.sendFile(`${pathfinder}/Topics.html`)
    
});
app.post("/start2",(req,res)=>{
    const body2=req.body;
    console.log("submitted with:",body2);
    res.redirect("/start3");
});
app.get("/start3",(req,res)=>{
    res.sendFile(`${pathfinder}/index2.html`)
});
app.post("/start3",(req,res)=>{
    const body3=req.body;
    console.log("submitted with",body3);
    res.send("submitted");
});
app.listen(4000,()=>{
    console.log("server is running")
});