import { sendMail } from '@sendgrid/mail';

export async function handler(event) {
  const { name, email, message } = JSON.parse(event.body);

  sendMail({
    to: 'your-email-address@example.com',
    from: 'your-email-address@example.com',
    subject: 'New Message from GetInTouch Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return {
    statusCode: 200,
    body: 'Email sent successfully!',
  };
}