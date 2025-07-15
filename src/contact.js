document.addEventListener('DOMContentLoaded', () => {
    const submitMessage = document.querySelector('.submit-btn')
    submitMessage.addEventListener('click', contactMe)

})

const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

const contactMe = async (event) => {
        const postEmailUrl = "http://localhost:3000/contact"
        event.preventDefault()
        const nameValue = name.value  
        const emailValue = email.value  
        const messageValue = message.value
        console.log(nameValue, emailValue, messageValue)
            // const response = await fetch(postEmailUrl, {
            //     method: "POST", 
            //     body: JSON.stringify({
            //         name: nameValue, 
            //         email: emailValue, 
            //         message: messageValue
            //     })
            // })
    }
    contactMe()
    
    


    