const express = require('express') 
const path = require('path')
const nodemailer = require('nodemailer') 


const contact = async (req, res) => {
    try { 
        const {name, email, message } = req.body
        console.log( name, email, message )

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'thomasmckenna12@gmail.com ',
                pass: 'abcj zpwy bcwo ibvu',
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
              subject: `${name} is reaching out to you from your Website`,
              //   text: `${message}`, // plain‑text body
              html: `<b>${message}</b>`, // HTML body
            });
            
            // console.log("Message sent:", info.messageId);
            console.log("Message sent:", info.messageId);
            
        } catch (err) {
            console.error('Error while sending mail', err)
        }
          })();

        //   console.log(transporter)

     } catch (err) {
        console.log(err)  
    }



}

module.exports = {
    contact
}