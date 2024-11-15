import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const protectedRoutes = ['/dashboard', '/settings']; 

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin)); // Usando NextResponse.redirect
  }

  return NextResponse.next(); 
}
    console.log("-------passou-----")
export const config = {
  matcher: ['/dashboard/:path*', '/settings:path*'], 
};
