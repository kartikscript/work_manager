import mongoose from "mongoose"

const taskSchema=new mongoose.Schema({
   
    title:{
      type:String,
      required:[true, 'Please enter the title'],
      unique:true,
    },
    description:{
      type:String,
      required:[true, 'Please enter description'],
    }, 
   createdAt:{
    type:Date,
    default:Date.now()
   },
   isPending:{
    type:Boolean,
    default:true
   },
   userId:{
    type:mongoose.Types.ObjectId,
    required:true
   }
   
})

const Task= mongoose.models.tasks || mongoose.model('tasks',taskSchema)

export default Task;