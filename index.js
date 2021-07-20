const express= require('express')
const bodyParser= require('body-parser')
const app=express()
const userRoutes = require("./routes/users")
const PORT = 5000;


app.use(bodyParser.json())
app.use('/users',userRoutes);

app.get("/",(req,res)=>{
    res.send("HEllooo")
})
app.listen(PORT,()=>{
    console.log(`listeing on ${PORT}`);
})
