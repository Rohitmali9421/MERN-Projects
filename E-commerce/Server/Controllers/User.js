const User=require("../Models/User")
async function handleRegister (req,res){
    const {name,email,password}=req.body
 
    const newUser=new User({
        name,email,password
    })
    await newUser.save()
   return res.json({msg:"Ok"})
}

module.exports={
    handleRegister,
}