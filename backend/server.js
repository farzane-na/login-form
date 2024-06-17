const express=require("express")
let app=express()
const userRouter=require("./routers/userRouter.js")
const cors=require("cors")
const port=3000
app.use(cors())
app.use("/api/user",userRouter)
app.listen(port,()=>{
    console.log("ok");
})