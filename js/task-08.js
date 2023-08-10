
const form = document.querySelector(".login-form");
class Values  {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
};


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
       return alert("Всі поля повинні бути заповнені!")
    }

    const collectedValues = new Values(email.value, password.value);

    console.log(collectedValues);
    event.currentTarget.reset()
})