const express = require('express') 
const path = require('path')
const nodemailer = require('nodemailer') 


const contact = async (req, res) => {
    try { 
        const {name, email, message } = req.body
        console.log( name, email, message )
        
        // need to email myself
        // retrieve email from front end contact
        // name, email, message
        // take the email from contact form 
     } catch (err) {
        console.log(err)  
    }



}

module.exports = {
    contact
}