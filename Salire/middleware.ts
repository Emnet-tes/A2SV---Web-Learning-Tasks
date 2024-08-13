import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
  
  
 
  if (!currentUser && request.nextUrl.pathname.startsWith('/Home')) {
    return Response.redirect(new URL('/signup', request.url))
  }
 
  // if (currentUser && !request.nextUrl.pathname.startsWith('/Home' ) ) {
  //   return Response.redirect(new URL('/pages/components/Home', request.url))
  // }
   return NextResponse.next();

}
 
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }