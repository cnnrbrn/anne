import { 
    createDivElement, 
    createImageElement, 
    createHeadingElement, 
    createElementParagraph } from "./domUtils";

export function buildSocialPostsCards(postData) {

        const postCard = createDivElement({
            className: 'post-card'
        });
        
        const imageContainer = createDivElement({
            className: 'card-image-container'
        });

        if (postData.media && postData.media.url) {
            const postImage = createImageElement({
                className: 'post-card-image',
                id: postData.id,
                src: postData.media.url,
                alt: postData.media.alt
            });
        
            imageContainer.appendChild(postImage);
        } else {
            console.log(`No media available for post ID: ${postData.id}`);
        }

        const textContainer = createDivElement({
            className: 'card-text-container',
            id: 'cardTextContainer'
        });

        const postTitle = createHeadingElement({
            className: 'post-card-title',
            htmlElement: 'h2',
            textContent: postData.title
        });

        const postText = createElementParagraph({
            className: 'post-card-text',
            textContent: postData.body
        });

        
        textContainer.append(postTitle, postText)
        postCard.append(imageContainer, textContainer);
    
    return postCard;
}



export function renderSocialPosts(socialPosts) {
    let renderPosts = document.getElementById('posts');
        renderPosts.innerHTML = '';

        socialPosts.forEach((post) => {
            let postCardHTML = buildSocialPostsCards(post);

            renderPosts.appendChild(postCardHTML);
        })
}

console.log('Hello from socialPosts.js');
