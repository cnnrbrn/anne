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

        // console.log("Request Payload:", JSON.stringify(body, null, 2));
        // console.log(response);

        if (response.ok) {
            const data = await response.json();
            // console.log("Post created successfully:", data);
            alert('Successfully created new post')
            return data
        } 
    } catch (error) {
        alert('Failed to create new post')
    }
}
