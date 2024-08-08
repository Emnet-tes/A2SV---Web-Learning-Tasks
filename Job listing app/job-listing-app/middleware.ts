import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
//   console.log(currentUser)
 
  if (!currentUser && request.nextUrl.pathname.startsWith('/pages/components/Home')) {
    return Response.redirect(new URL('/pages/components/signup', request.url))
  }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/pages/components/signup' ) ) {
//     return Response.redirect(new URL('/pages/components/signin', request.url))
//   }

}
 
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }