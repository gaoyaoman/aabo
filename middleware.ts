import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const role = request.cookies.get('userRole')?.value || 'guest';
  const { pathname } = request.nextUrl;

  // 1. 拦截供应商专属页面
  if (pathname.startsWith('/files') && role !== 'supplier') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. 拦截客户端专属页面
  if (pathname.startsWith('/quotes') && role !== 'client') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 3. 拦截客户端和管理端共享页面 (供应商不能访问)
  if (pathname.startsWith('/manufacturers') && role === 'supplier') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // 4. 拦截管理端专属设置页面
  if (pathname.startsWith('/settings') && role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/files/:path*', '/quotes/:path*', '/manufacturers/:path*', '/settings/:path*'],
};
