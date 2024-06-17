const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const userDataBase=require("mysql")
const userRouter= express.Router()
userRouter.use(cors())
userRouter.use(bodyParser.json())

const connection=userDataBase.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mysite"
})

const validateEmail=(postBody,res)=>{
    let validateEmailQuery=`SELECT email FROM users WHERE email='${postBody.email}'`
    connection.query(validateEmailQuery,(err,result)=>{
        if(err){
            console.log("Error => ",err);
        }else{
            console.log(result.length)
            if(result.length==0){
                insertNewUser(postBody,res)
            }else{
                res.send("validate")
            }
        }
    })
}
const insertNewUser=(postBody,res)=>{
    let newUserBody=postBody
    if(newUserBody.userName.length<8 || newUserBody.email.length<10 || newUserBody.password.length<10){
        res.send("inputs is not valid")
    }else{
        let addNewUserQuery=`INSERT INTO users VALUES (NULL,'${newUserBody.userName}','${newUserBody.email}','${newUserBody.password}')`
        connection.query(addNewUserQuery,(err,result)=>{
            if(err){
                console.log("Error => ",err);
            }else{
                console.log("creat user corecctly",result)
            }
        })
        res.send("ok")
    }
}
userRouter.get("/:userEmail/:userPass",(req,res)=>{
    console.log(req.params);
    connection.connect(err=>{
        if(err){
            console.log("error in connect",err)
        }else{
            let checkEmailAndPassQuery=`SELECT * FROM users WHERE email='${req.params.userEmail}'AND password='${req.params.userPass}'`
            connection.query(checkEmailAndPassQuery,(err,result)=>{
                if(err){
                    console.log("you have an error => ",err);
                }else{
                    console.log("check => ",result)
                    if(result.length==0){
                        res.send("error")
                    }else{
                        res.send("ok")
                    }
                }
            })
        }
    })
})
userRouter.get("/",(req,res)=>{
    connection.connect(err=>{
        if(err){
            console.log("error in connect",err)
        }else{
            let selectAllUserQuery='SELECT email,username FROM users'
            connection.query(selectAllUserQuery,(err,result)=>{
                if(err){
                    console.log("Error => ",err);
                }else{
                    console.log("get all data succesfully => ",result);
                    res.send(result)
                }
            })
        }
    })
})
userRouter.post("/new-user",(req,res)=>{
    connection.connect(err=>{
        if(err){
            console.log("error in connect",err);
        }else{

            validateEmail(req.body,res)
        }
    })
})
userRouter.put("/update-user/:userOldEmail",(req,res)=>{
    connection.connect(err=>{
        if(err){
            console.log("err in connect",err);
        }else{
            console.log("from update : ",req.body);
            let updateUserQuery=`UPDATE users SET username='${req.body.username}' , email='${req.body.email}' , password='${req.body.password}' WHERE email='${req.params.userOldEmail}'`
            connection.query(updateUserQuery,(err,result)=>{
                if(err){
                    console.log("Error => ",err);
                }else{
                    console.log("update correctly => ",result);
                    res.send("user updated")
                }
            })
        }
    })
})
userRouter.delete("/remove-user/:userEmail",(req,res)=>{
    connection.connect(err=>{
        if(err){
            console.log("error");
        }else{
            console.log(req.params.userEmail);
            let deleteUserQuery=`DELETE FROM users WHERE email='${req.params.userEmail}'`
            connection.query(deleteUserQuery,(err,result)=>{
                if(err){
                    console.log("Error => ",err);
                }else{
                    console.log("get all data succesfully => ",result);
                    res.send(result)
                }
            })
        }
    })
})

module.exports=userRouter