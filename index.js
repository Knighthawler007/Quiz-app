const server=require("express")
const path=require("path")
const bodyparser=require("body-parser")
const app=server()
const pathfinder=path.join(__dirname,'client')
app.use(bodyparser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.sendFile(`${pathfinder}/index.html`)
});
app.post("/",(req,res)=>{
    const body=req.body;
    console.log("submitted with:",body);
    res.redirect("/topics");
});
app.get("/topics",(req,res)=>{
    res.sendFile(`${pathfinder}/Topics.html`)
    
});
app.post("/topics",(req,res)=>{
   const topic=req.body;
   switch(topic)
   {
        case "code":
            res.redirect("/code");
            break;
        case "sport":
            res.redirect("/sports");
            break;
        case "sci":
            res.redirect("/science");
            break;
        case "lit":
            res.redirect("/literature");
            break;
        case "curr":
            res.redirect("/currentaffairs");
            break;
        default:
            res.redirect("/science");

   }
});
app.get("/code",(req,res)=>{
    res.sendFile(`${pathfinder}/coding.html`)
});
app.post("/code",(req,res)=>{
    const body3=req.body;
    console.log("submitted with",body3);
    res.send("submitted");
});
app.get("/currentaffairs",(req,res)=>{
    res.sendFile(`${pathfinder}/Current.html`)
});
app.post("/currentaffairs",(req,res)=>{
    const body4=req.body;
    console.log("submitted with",body4);
    res.send("submitted");
});
app.get("/sports",(req,res)=>{
    res.sendFile(`${pathfinder}/Sports.html`)
});
app.post("/sports",(req,res)=>{
    const body5=req.body;
    console.log("submitted with",body5);
    res.send("submitted");
});
app.get("/science",(req,res)=>{
    res.sendFile(`${pathfinder}/Science.html`)
});
app.post("/science",(req,res)=>{
    const body6=req.body;
    console.log("submitted with",body6);
    res.send("submitted");
});
app.get("/literature",(req,res)=>{
    res.sendFile(`${pathfinder}/Literature.html`)
});
app.post("/literature",(req,res)=>{
    const body7=req.body;
    console.log("submitted with",body7);
    res.send("submitted");
});
app.listen(4000,()=>{
    console.log("server is running")
});