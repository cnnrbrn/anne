import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
    event.preventDefault();

    const form = event.target;
    const createNewPost = Object.fromEntries(new FormData(form));
    // console.log("Form Data:", createNewPost); 
    createPost(createNewPost)
}
