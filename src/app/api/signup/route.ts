import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


connect()
export async function POST(request:NextRequest){

  try {
      const reqBody =await request.json()
      const {username,email,password} =reqBody

      const user =await User.findOne({email})
      if(user){
        return NextResponse.json({
          message:'User already exists',
          success:false
        },{status:401})
      }

      const salt= await bcryptjs.genSalt(10)
      const hashedPassword =await bcryptjs.hash(password,salt)
      const newUser = new User({
        username,
        email,
        password:hashedPassword
      })
      await newUser.save()
      return NextResponse.json({
        message:'created',
        success:false
        
      },{status:200})
  } catch (error :any) {
    
      return NextResponse.json({
        message:`Invalid user`,
        success:false
      },{status:401})
  }
}