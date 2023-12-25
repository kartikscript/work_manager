import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../../models/taskModel";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { getIdFromToken } from "@/helper/getIdFromToken";


connect();


type obj = {
title: String;
  description: String;
};


export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { title, description }: obj = reqBody;
    //get token

    const userId=getIdFromToken(req)
    
    if (!userId){
      return NextResponse.json({
        message:'failed to get ID',
        success:false
      },{status:401})
    }
    const newTask = new Task({
      title,
      description,
      userId:userId
    });

    await newTask.save();

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
