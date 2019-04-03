var express=require("express");
var app=express();
var bodyParser =require("body-parser");
var methodOverride  =require("method-override");
var port = process.env.PORT || 8080;

var array=[{name:"Naman Agarwal",ph:"8617558341"}];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.set("view engine","ejs");

app.post("/",(req,res)=>
{
    var name=req.body.name;
    var ph=req.body.phone;
    var newEntry={name,ph};

    array.push(newEntry);
    res.redirect("/");
})

app.get("/",(req,res)=> 
{
    res.render("index",{person:array}); 
}) 

app.get("/add",(req,res)=>{
    res.render("form");
})

app.post("/delete",(req,res)=>
{
    var index;
    var d=req.body.del; 
    array.forEach(function(r)
    {
        if(r.name==d)
        {
            index = array.indexOf(r);
        }
    })  
if (index > -1) {
  array.splice(index, 1);
}
res.redirect("/");
}) 

app.listen(port,()=> 
{
    console.log("Our App is running");
})           