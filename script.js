const login=document.getElementById("nav__item_login");
const signup=document.getElementById("nav__item_signup");

const login_click=document.getElementById("login");
const signup_click=document.getElementById("signup");

const login_form=document.getElementById("login-form");
const signup_form=document.getElementById("signup-form");

const loginForgot=document.getElementById("login__forgot");
const createAccount=document.getElementById("create__Account");
const loginLink=document.getElementById("loginLink");
// console.log(signup);
// console.log(login);
// console.log(login_click);
// console.log(signup_click);
// console.log(login_form);
// console.log(signup_form);
// console.log(loginForgot);
// console.log(createAccount);
// console.log(loginLink);

function signUp(){
    login_form.classList.add("disabled");
    loginForgot.classList.add("disabled");
    createAccount.classList.add("disabled");
    signup.classList.add("active");
    login.classList.remove("active");
    signup_form.classList.remove("disabled");
    loginLink.classList.remove("disabled");
}

function logIn(){
    login_form.classList.remove("disabled");
    loginForgot.classList.remove("disabled");
    createAccount.classList.remove("disabled");
    signup.classList.remove("active");
    login.classList.add("active");
    signup_form.classList.add("disabled");
    loginLink.classList.add("disabled");
}

// Logic when click on SIGN UP link
signup_click.addEventListener("click",signUp);

// Logic when click on LOGIN link
login_click.addEventListener("click",logIn);

// Logic when click on Create Account link
createAccount.addEventListener("click",signUp);

// Logic when click on Login link
loginLink.addEventListener("click",logIn);

