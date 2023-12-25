import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path=request.nextUrl.pathname;

   const isPublicPath=path==='/signin' || path==='/signup' || path==='/'
   const token = request.cookies.get('userToken')?.value || ""

   if(token && isPublicPath){// if a user has token (he is on profile ,etc) and trying to access publicPath by writing in url path ( /login) so then redirect him to the below coded page
          
       return NextResponse.redirect(new URL('/', request.nextUrl))
   }
   if(!token && !isPublicPath){// user has no token and trying to access profile (other than publicpaths)
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
   }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*','/','/signin','/signup','/addwork','/show-tasks']
}