// UI Vars
const emailContent = document.querySelector('.email-content');
const button = document.querySelector('.email-input-btn');
const message = document.querySelector('.message');
const error = document.querySelector('.error')

button.addEventListener('click', function(){
    let email = emailContent.value;
    
    // Validate 
    if(validateEmail(email) === false){
        setMessage('Please provide a valid email', "hsl(0, 93%, 68%)");
        emailContent.style.borderColor = "hsl(0, 93%, 68%)";
        emailContent.style.borderWidth = "2px"
        error.style.visibility = "visible"
    }else {
        setMessage('Thank you for being awesome!', "hsl(0, 36%, 70%)")
        setTimeout(() => {
            emailContent.value = ""
        }, 500);
        error.style.visibility = "hidden"
        emailContent.style.borderColor = "rgb(230, 202, 202)";
    }
})



function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}