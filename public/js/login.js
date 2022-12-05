let loginForm = document.querySelector("#loginForm");

let login = async function(event) {
    event.preventDefault();
    let enteredUsername = document.querySelector("#username-input-login");
    let enteredPassword = document.querySelector("#password-input-login");

    let response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            username: enteredUsername.value,
            password: enteredPassword.value
        }),
        headers: {"Content-Type": "application/json"}
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("login failed");
    }
}

loginForm.addEventListener("submit", login);