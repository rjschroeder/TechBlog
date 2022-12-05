let loginForm = document.querySelector("#loginForm");

let login = async function(event) {
    event.preventDefault();
    let enteredUsername = document.querySelector("#username-input");
    let enteredPassword = document.querySelector("#password-input");

    let response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            username: enteredUsername.value,
            password: enteredPassword.value
        })
    })

}