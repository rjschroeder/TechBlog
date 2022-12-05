let newCommentForm = document.querySelector("#newCommentForm");

let newPost = async function(event) {
    event.preventDefault();
    let ent_post_id = document.querySelector("#post-id");
    let enteredContent = document.querySelector("#content-input");

    let response = await fetch("/api/comments/new", {
        method: "POST",
        body: JSON.stringify({
            post_id: ent_post_id.value,
            content: enteredContent.value
        }),
        headers: {"Content-Type": "application/json"}
    })

    if(response.ok) {
        document.location.reload();
    } else {
        alert("new comment failed");
    }
}

newCommentForm.addEventListener("submit", newPost);