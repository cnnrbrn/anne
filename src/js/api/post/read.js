import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";


export async function readSinglePost() {
    const id = new URLSearchParams(window.location.search).get('id');
    
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, {
            method: 'GET',
            headers: headers()
        })
        if (postId) {
            console.log('Post ID: ', `${API_SOCIAL_POSTS}/${postId}`);
            
        };
        
        console.log('response ',  response);

        if (response.ok) {
            const data = await response.json();
            const post = data.data;
            console.log('read single post data: ', data);
            
            return post;
        };
    } catch (error) {
        alert('failed to load single post');
    };
};




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
        const queryParam = buildQueryParams(limit, page, tag)
        
        const response = await fetch(`${API_SOCIAL_POSTS}?${queryParam}`, {
            method: 'GET',
            headers: headers(),
        })
        
        if (response.ok) {
            const data = await response.json();
            const posts = data.data;
            const meta = data.meta;
            
            console.log('POSTS: ', posts);
            console.log('META: ',meta);
            
            
            return {posts, meta};
        }
    
    } catch (error) {
        alert('Error loading social posts')
    }
}




export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
