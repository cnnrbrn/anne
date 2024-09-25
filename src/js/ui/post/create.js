import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const createNewPost = {
        title: form.get('postTitle'),  
        body: form.get('postText'),    
        tags: form.get('tags') ? form.get('tags').split(', ').map(tag => tag.trim()) : [],  
        media: {
            url: form.get('image'),  
            alt: form.get('alt') 
        }
    };
    
    console.log("Formed new Data:", createNewPost); 
    createPost(createNewPost)
}