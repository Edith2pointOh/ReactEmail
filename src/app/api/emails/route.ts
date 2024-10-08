import { Resend } from 'resend';
import Welcome from '@/app/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { email, firstName } = await request.json();

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome to React Email!',
        react: Welcome({ firstName }),
    });
}