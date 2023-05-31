const emailInputEl = document.getElementById('email');
const subscribeBtn = document.getElementById('subscribe');
const errorText = document.querySelector('.error-text');
const container = document.querySelector('.container');

const thanksCard = document.querySelector('.thanks-card');
const confirmMsg = document.querySelector('.msg');
const dismissBtn = document.getElementById('dismiss');



function handleClick() {
    const regx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    const email = emailInputEl.value;

    confirmMsg.innerHTML = `A confirmation email has been sent to <b>${email}</b>.
Please open it and click the button inside to confirm your subscription.`

    if (email.length == 0) {
        errorText.textContent = "Field required"
        emailInputEl.classList.add('error');
    }
    else if (!email.match(regx)) {
        errorText.textContent = "Valid email required"
        emailInputEl.classList.add('error');
    }
    else {
        container.classList.add('done');
        thanksCard.classList.remove('done');
        errorText.textContent = "";
        emailInputEl.classList.remove('error');
    }


}

subscribeBtn.addEventListener('click', handleClick);
dismissBtn.addEventListener('click', () => {
    thanksCard.classList.add('done');
    container.classList.remove('done');
});


// window.location.href = "http://www.w3schools.com";