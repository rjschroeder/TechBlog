let logoutButton = document.querySelector("#logoutnav");

const logout = async () => {
    let response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
    })

    if(response.ok) {
        document.location.replace("/");
    } else {
        console.log("Could not log out");
    }
}

logoutButton.addEventListener("click", logout);