// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function Contact(req: NextApiRequest, res: NextApiResponse) {
//   const { name, email, message, subject } = await JSON.parse(req.body);

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   try {
//     await transporter.sendMail(
//       {
//         from: "alanjibarradev@gmail.com",
//         to: "alanjibarradev@gmail.com",
//         subject: subject,
//         html: `<p>You have a contact form submission from ${name}</p><br>
//         <p><strong>Email: </strong> ${email}</p><br>
//         <p><strong>Message: </strong> ${message}</p><br>
//       `,
//       },
//       (err: any, success: any) => {
//         if (err) {
//           throw new Error(err);
//         }
//         res.status(200).end();
//       }
//     );
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// }
const hello = () => {
  
}
export default hello