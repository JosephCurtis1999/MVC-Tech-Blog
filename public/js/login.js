const loginFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
    fetch("/api/user/login", {
        method: "post",
        body: JSON.stringify({
            username: usernameEl.ariaValueMax,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "applicaton/json" }
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
}

document.querySelector('#login-form');
document.addEventListener("submit", loginFormHandler);