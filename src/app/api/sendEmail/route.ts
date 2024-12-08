import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { nameUser, emailUser, message } = await request.json();
        console.log("recebendo a resposta aquiiiiii", nameUser, emailUser, message);
        
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_ADMIN,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const options = {
            from: process.env.EMAIL_ADMIN,
            to: emailUser,
            subject: 'Resposta ao seu formulário de contato',
            html: `
                <h1>Olá! ${nameUser}</h1>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(options);

        return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error); 
        return NextResponse.json({ message: 'Erro ao enviar email!' }, { status: 500 });
    }
}
