//register logic
const users = require("../Models/usermodel")
exports.register = async(req, res) => {
    // res.json("User register success");
    
    //fetch data from req body
    var {username,email,password} = req.body
    const existingUser=await users.findOne({email})

 try{
        if(existingUser){
            res.status(401).json("already registered ! proceed to login")
        }
        else{
            const newUser=new users({
                username,
                email,
                password,
                profile:""
                ,linkedIn:"",
                gitHub:""
            })
            await newUser.save()
            res.status(201).json("account created successfully")
    
        }
 }
 catch{
    res.status(400).json("bad request")

 }
    
 
   
    }

    exports.login=async(req,res)=>{
        const {email,password}=req.body

        const user=await users.findOne({email,password})

        if(user){
            res.status(200).json("login successfull")
        }
        else {
            res.status(401).json("incorrect credentials")
        }



    }

    