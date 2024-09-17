import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function readPost(id) {

    
}


function buildQueryParams(limit, page, tag) {
    const queryParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
    });
    if (tag) {
        queryParams.append('tag', tag)
    }
    return queryParams.toString();
}



export async function readPosts(limit = 12, page = 1, tag) {
    
    try {
        const queryString = buildQueryParams(limit, page, tag)
        
        const response = await fetch(`${API_SOCIAL_POSTS}?${queryString}`, {
            method: 'GET',
            headers: headers(),
        })
        
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            
        }
    
    } catch (error) {
        alert('Error loading social posts')
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
