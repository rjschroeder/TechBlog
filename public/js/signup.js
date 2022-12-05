let signupf = async function(event) {
    let enteredUsername = document.querySelector("#username-input-signup");
    let enteredEmail = document.querySelector("#email-input-signup");
    let enteredPassword = document.querySelector("#password-input-signup");

    const response = await fetch("/api/users/new", {
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

document
  .querySelector('#signupForm')
  .addEventListener('submit', signupf);
