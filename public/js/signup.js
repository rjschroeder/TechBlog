let signupForm = document.querySelector("#signupForm");

let signup = async function(event) {
    event.preventDefault();
    let enteredUsername = document.querySelector("#username-input");
    let enteredPassword = document.querySelector("#password-input");

    let response = await fetch("/api/users/new", {
        method: "POST",
        body: JSON.stringify({
            username: enteredUsername.value,
            password: enteredPassword.value
        })
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        console.log("sign in failed");
    }
}

loginForm.addEventListener("submit", signup);