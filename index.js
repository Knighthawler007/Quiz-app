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
   const topic=req.body;
   switch(topic)
   {
        case "code":
            res.redirect("/code");
            break;
        case "sport":
            res.redirect("/sport");
            break;
        case "sci":
            res.redirect("/sci");
            break;
        case "lit":
            res.redirect("/lit");
            break;
        case "curr":
            res.redirect("/curr");
            break;
        default:
            res.redirect("/sci");

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
app.get("/curr",(req,res)=>{
    res.sendFile(`${pathfinder}/Current.html`)
});
app.post("/curr",(req,res)=>{
    const body4=req.body;
    console.log("submitted with",body4);
    res.send("submitted");
});
app.get("/sport",(req,res)=>{
    res.sendFile(`${pathfinder}/Sports.html`)
});
app.post("/sport",(req,res)=>{
    const body5=req.body;
    console.log("submitted with",body5);
    res.send("submitted");
});
app.get("/sci",(req,res)=>{
    res.sendFile(`${pathfinder}/Science.html`)
});
app.post("/sci",(req,res)=>{
    const body6=req.body;
    console.log("submitted with",body6);
    res.send("submitted");
});
app.get("/lit",(req,res)=>{
    res.sendFile(`${pathfinder}/Literature.html`)
});
app.post("/lit",(req,res)=>{
    const body7=req.body;
    console.log("submitted with",body7);
    res.send("submitted");
});
app.listen(4000,()=>{
    console.log("server is running")
});