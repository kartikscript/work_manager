import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../../models/taskModel";
import { getIdFromToken } from "@/helper/getIdFromToken";


 connect()
export async function GET(req:NextRequest){
  
  try {
    const userId=getIdFromToken(req)
    if (!userId){
      return NextResponse.json({
        message:'failed to get ID',
        success:false
      },{status:401})
    }
    const data =await Task.find({userId:userId})

    return NextResponse.json(data)
    
  } catch (error) {
    return NextResponse.json({message:'Failed to Get Tasks'},{status:401})
  }

}



export async function PATCH(req:NextRequest){
  try {
    const reqBody=await req.json()
    const {isPending,_id}:{isPending:Boolean,_id:String}=reqBody

    await Task.findByIdAndUpdate(_id,{isPending:isPending})
    return NextResponse.json({message:'status changed!!',success:true},{status:200})
  } catch (error) {
      return NextResponse.json({message:'Failed to update status'},{status:401})
  }
}

export async function POST(req:NextRequest){
  try {
    const reqBody=await req.json()
    const {_id}:{_id:String}=reqBody
    await Task.findByIdAndDelete(_id)
    return NextResponse.json({message:'Task Deleted!!',success:true},{status:200})

  } catch (error) {
    return NextResponse.json({message:'Failed to Delete Task'},{status:401})
  }
}