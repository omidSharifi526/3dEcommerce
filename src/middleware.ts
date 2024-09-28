
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';


export function middleware(req:NextRequest) {
    const token=req.cookies.get('jwt');
    if(!token){
        return NextResponse.redirect('http://localhost:3000/auth/login')
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
  };