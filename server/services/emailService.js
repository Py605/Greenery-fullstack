import { config } from "dotenv";
import nodemailer from 'nodemailer'
config({ path: "./config/config.env" });
//email ke body ko html dege text dege to html ignore hojayega
async function sendmail({to,html,subject}){
 let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
 });

 let info = await transport.sendMail({

    from : `Greenery<noreply@greenery.com>`,
    to: to,
    subject: subject,
    html:html
    // from: from, //javascript key value same ho to
    // to: to,
    // subject: subject,
    // text: text,
    // html: html
 })

}

export default sendmail;