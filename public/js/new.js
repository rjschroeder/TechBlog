let newPostForm = document.querySelector("#newPostForm");

let newPost = async function(event) {
    event.preventDefault();
    let enteredTitle = document.querySelector("#title-input");
    let enteredContent = document.querySelector("#content-input");

    let response = await fetch("/api/posts/new", {
        method: "POST",
        body: JSON.stringify({
            title: enteredTitle.value,
            content: enteredContent.value
        }),
        headers: {"Content-Type": "application/json"}
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        console.log("new post failed");
    }
}

newPostForm.addEventListener("submit", newPost);