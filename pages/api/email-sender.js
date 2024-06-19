import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail) {
    console.error('Missing environment variables');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailOptions = {
    from: email,
    to: receiverEmail,
    subject: `New message from ${name}`,
    text: message,
  };

  const autoReplyOptions = {
    from: smtpUser,
    to: email,
    subject: 'Thank you for your message',
    text: 'Your message has been received and I will get back to you shortly.',
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
