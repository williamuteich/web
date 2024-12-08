import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { nameUser, emailUser, message } = await request.json();

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
                <html>
                    <body style="font-family: Arial, sans-serif; background-color: #f8c8d6a6; margin: 0; padding: 0;">
                        <!-- Container principal -->
                        <div style="width: 100%; background-color: #f8c8d6; padding: 50px 0;"> <!-- Alterado para rosa mais claro -->
                            <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 30px; border-radius: 10px;">
                                
                                <!-- Título -->
                                <h1 style="font-family: 'Cursive', sans-serif; font-size: 36px; text-align: center; color: #ff66b2; margin-bottom: 20px;">
                                    Elegance
                                </h1>

                                <!-- Saudação -->
                                <p style="font-size: 18px; color: #333333; text-align: center; margin-bottom: 30px;">
                                    Olá, William!
                                </p>

                                <!-- Mensagem padrão (assunto) -->
                                <p style="font-size: 16px; color: #333333; margin-bottom: 20px;">
                                    Obrigado por entrar em contato com nossa equipe de suporte.
                                </p>

                                <!-- Mensagem personalizada -->
                                <p style="font-size: 16px; color: #333333; margin-bottom: 20px;">
                                    ${message}
                                </p>

                                <!-- Footer com redes sociais -->
                                <div style="font-size: 14px; color: #777777; text-align: center; margin-top: 40px; border-top: 1px solid #eeeeee; padding-top: 20px;">
                                    <p>© 2024 Sua Empresa - Todos os direitos reservados.</p>
                                    <p>Rua Exemplo, 123, Cidade, Estado, CEP 12345-678</p>

                                    <!-- Redes sociais -->
                                    <div style="margin-top: 10px;">
                                        <a href="https://www.instagram.com" style="text-decoration: none; margin: 0 10px;">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Instagram" style="width: 30px; height: 30px;"/>
                                        </a>
                                        <a href="https://wa.me/5511999999999" style="text-decoration: none; margin: 0 10px;">
                                            <img src="https://cdn.pixabay.com/photo/2016/08/27/03/07/whatsapp-1623579_1280.png" alt="WhatsApp" style="width: 30px; height: 30px;"/>
                                        </a>
                                        <a href="https://www.facebook.com" style="text-decoration: none; margin: 0 10px;">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" style="width: 30px; height: 30px;"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>
            `
        };

        await transporter.sendMail(options);

        return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        return NextResponse.json({ message: 'Erro ao enviar email!' }, { status: 500 });
    }
}
