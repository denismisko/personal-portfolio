const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName(){

    const name = document.getElementById('contact-name').value;

    if (name.length == 0) {

        nameError.innerHTML = 'Name is required';
        return false;
        
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        nameError.innerHTML = 'Write full name';
        return false;
        
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){

    const phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {

        phoneError.innerHTML = 'Phone no is required';
        return false;
        
    }

    if (phone.length !== 10) {

        phoneError.innerHTML = 'Phone must have 10 digts';
        return false;
        
    }

     if (!phone.match(/^[0-9]{10}$/)) {

        phoneError.innerHTML = 'Only digits please';
        return false;

    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateEmail(){

    const email = document.getElementById('contact-email').value;

    if (email.length == 0) {

        emailError.innerHTML = 'Email is required';
        return false;
        
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)) {

        emailError.innerHTML = 'Email Invalid';
        return false;

    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateMessage(){

    const message = document.getElementById('contact-message').value;
    const required = 20;
    const left = required - message.length;

    if (left>0) {
        messageError.innerHTML = left + ' more character required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateForm(){

    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please submit all fields'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
        
    }

    submitError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}