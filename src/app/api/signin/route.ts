import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connect()
export async function POST(request :NextRequest){


  try {
      const reqBody= await request.json()
      const {email,password}= reqBody

     const user= await User.findOne({
        email
      })
      if(!user){
          return NextResponse.json({
            message:'User Not Found',
            success:false
          },{status:401})
      }
      //now if user exists
      //check password is true
      const isPassword= await bcryptjs.compare(password,user.password)
      if(!isPassword){
        return NextResponse.json({
          message:'Incorrect Password',
          success:false
        },{status:401})
      }
      //assign token
      const token =  jwt.sign({_id:user._id, email:user.email,username:user.username},process.env.JWT_SECRET_KEY!,{expiresIn:'1d'})

        const response= NextResponse.json({
          message:`Welcome ${user.username}`,
          success:true
        },{status:200})
        response.cookies.set('userToken',token,{
          httpOnly:true,
          
        })
        return response
        
  } catch (error:any) {
   return NextResponse.json({
      message:'Something went wrong',
      success:false
    },{status:401})
    
  }
}