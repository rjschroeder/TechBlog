let signupForm = document.querySelector("#signupForm");

let signup = async function(event) {
    event.preventDefault();
    let enteredUsername = document.querySelector("#username-input-signup");
    let enteredEmail = document.querySelector("#email-input-signup");
    let enteredPassword = document.querySelector("#password-input-signup");

    let response = await fetch("/api/users/new", {
        method: "POST",
        body: JSON.stringify({
            username: enteredUsername.value,
            email: enteredEmail.value,
            password: enteredPassword.value
        }),
        headers: {"Content-Type": "application/json"}
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("sign in failed");
    }
}

signupForm.addEventListener("submit", signup);