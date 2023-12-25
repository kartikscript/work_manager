import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
   
   username:{
    type:String,
    required:[true,'Username must be filled'],
   },
   email:{
    type:String,
    required:[true,'Email must be filled'],
    unique:true
   },
   password:{
    type:String,
    required:[true,'Password must be filled'],
   },
   

})

const User= mongoose.models.users || mongoose.model('users',userSchema)

export default User;