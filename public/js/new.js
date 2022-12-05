let newPostForm = document.querySelector("#newPostForm");

let newPost = async function(event) {
    event.preventDefault();
    let enteredTitle = document.querySelector("#title-input");
    let enteredContent = document.querySelector("#content-input");

}

newPostForm.addEventListener("submit", newPost);