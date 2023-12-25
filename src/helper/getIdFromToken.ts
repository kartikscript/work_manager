import { NextRequest, NextResponse } from "next/server"
import jwt  from 'jsonwebtoken';


export const getIdFromToken=(req:NextRequest)=>{

  const userToken = req.cookies.get('userToken')?.value||''

  if(!userToken){
    return null
  }
  const decodedToken:any=jwt.verify(userToken,process.env.JWT_SECRET_KEY!)
//get userid
  const userId=decodedToken._id

return userId
}