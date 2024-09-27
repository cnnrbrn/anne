import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers";


export async function createPost({ title, body, tags, media  }) {
    const bodyData = {
        title, 
        body, 
        tags, 
        media
    };
    
    try {
        const response = await fetch(API_SOCIAL_POSTS, {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify(bodyData),
        });

        if (!response.ok) {
            alert('Failed to create post')
        } else {
            const data = await response.json();
            console.log("Post created successfully:", data);
            alert('Successfully created new post')
            window.location.href = '/';
            return data
        }
    } catch (error) {
        alert('Failed to create new post')
    }
}
