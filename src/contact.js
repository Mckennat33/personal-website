document.addEventListener('DOMContentLoaded', () => {
    const submitMessage = document.querySelector('.submit-btn')
    submitMessage.addEventListener('click', contactMe)

})
    
    const contactName = document.querySelector(".name")
    const email = document.querySelector("#email")
    const message = document.querySelector("#message")

const contactMe = async (event) => {
    event.preventDefault()
    const postEmailUrl = "http://localhost:3000/contact"
    const nameValue = contactName.value  
    const emailValue = email.value  
    const messageValue = message.value
    console.log(nameValue, emailValue, messageValue)
            const response = await fetch(postEmailUrl, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameValue, 
                    email: emailValue, 
                    message: messageValue
                })
            })
            const result = await response.json()
            console.log(result)
        }
        
    
    


    