import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event, id) {
    event.preventDefault();

    console.log("Post ID fetched from URL:", id);

    const form = new FormData(event.target);

    const editedData = {
        title: form.get('postTitle'),  
        body: form.get('postText'),    
        tags: form.get('tags') ? form.get('tags').split(', ').map(tag => tag.trim()) : [],  
        media: {
            url: form.get('image'),  
            alt: form.get('alt') 
        }
    };
    
    console.log("Formed new Data:", editedData); 
    updatePost(id, editedData)
}



console.log('ui/post/update.js');
