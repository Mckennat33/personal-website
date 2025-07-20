const express = require('express') 
const path = require('path')
const nodemailer = require('nodemailer') 

const contact = async (req, res) => {
    try { 
        const {name, email, message } = req.body
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, 
            auth: {
                user: 'thomasmckenna12@gmail.com ',
                pass: 'itho ueqx ciyg wffm',
            },
            tls: {
                rejectUnauthorized: false,
              },
          });
          (async () => {
            try {
            const info = await transporter.sendMail({
                from: `${email}`,
                to: "thomasmckenna12@gmail.com",
                subject: `${name} is reaching out to you from ${email}`,
                  //   text: `${message}`, // plain‑text body
                html: `<b>${message}</b>`, // HTML body
            });
            console.log("Message sent:", info.messageId);
        } catch (err) {
            console.error('Error while sending mail', err)
        }
          })();
     } catch (err) {
        console.log(err)  
    }



}

module.exports = {
    contact
}