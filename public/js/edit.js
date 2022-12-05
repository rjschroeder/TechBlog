let editPostForm = document.querySelector("#editPostForm");
let deletePostButton = document.querySelector("#deletePostButton");
let post_id = document.querySelector("#postID");

let editPost = async function(event) {
    event.preventDefault();
    let enteredTitle = document.querySelector("#title-input");
    let enteredContent = document.querySelector("#content-input");

    let response = await fetch(`/api/posts/${post_id.value}`, {
        method: "PUT",
        body: JSON.stringify({
            title: enteredTitle.value,
            content: enteredContent.value
        }),
        headers: {"Content-Type": "application/json"}
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        console.log("edit post failed");
    }
}

let deletePost = async () => {
    await fetch(`/api/posts/${post_id.value}`, {
        method: "DELETE"
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        console.log("delete post failed");
    }
}

editPostForm.addEventListener("submit", editPost);
deletePostButton.addEventListener("click", deletePost);