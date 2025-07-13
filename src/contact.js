document.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const message = document.querySelector("#message")
    const submitMessage = document.querySelector('.submit-btn')
    
    const contactMe = async () => {
        submitMessage.addEventListener('click', (e) => { 
            e.preventDefault()
            const nameValue = name.value  
            const emailValue = email.value  
            const messageValue = message.value
            console.log(nameValue, emailValue, messageValue)
        })
        
    }
    contactMe()
    
})
    


    