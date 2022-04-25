const signupFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    fetch("/api/iser", {
        method: "post",
        body: JSON.stringify({
            username: usernameEl.ariaValueMax,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

document.querySelector("#signup-form");
document.addEventListener("submit", signupFormHandler);