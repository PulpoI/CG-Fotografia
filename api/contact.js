import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, email, mensaje } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tu_email@gmail.com',
                pass: 'tu_contraseña'
            }
        });

        const mailOptions = {
            from: email,
            to: 'camilagonzalezfotografia@gmail.com',
            subject: 'Mensaje desde la WEB',
            text: `Nombre: ${nombre}\nE-Mail: ${email}\nMensaje:\n${mensaje}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Mensaje enviado, muchas gracias.' });
        } catch (error) {
            res.status(500).json({ error: 'Falló el envío' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
} 