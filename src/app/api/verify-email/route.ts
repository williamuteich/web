// src/app/api/verify-email/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  // Apenas logando o token
  console.log("Token recebido:", token);

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 });
  }

  // Retornando apenas um log para garantir que o token foi capturado
  return NextResponse.json({ message: `Token: ${token} logged!` });
}
