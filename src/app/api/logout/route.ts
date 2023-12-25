import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){

  try {
    const response=NextResponse.json({
      message:'logged out',
      success:true,
    })
    response.cookies.set("userToken", "", {
      httpOnly:true,
      expires:new Date(0)
    })
    return response
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message:'something went wrong while logging out',
      success:false
    },{status:404})
  }
}