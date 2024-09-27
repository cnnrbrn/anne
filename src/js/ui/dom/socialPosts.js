import { 
    createDivElement, 
    createImageElement, 
    createHeadingElement, 
    createElementParagraph } from "./domElements";

// createDivElement({className = '', id = ''})

// createImageElement({className = '', id = '', src = '', alt = ''})

// createHeadingElement({className = '', htmlElement, textContent})

// createElementParagraph({className = '', textContent})

export function buildSocialPostsCards(postData) {

        const postCard = createDivElement({
            className: 'post-card'
        });

        const contentContainer = createDivElement({  });

        contentContainer.addEventListener('click', () => {
            window.location.href = `/post/?id=${postData.id}`
        })

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

    if (!renderPosts) {
        console.error("Posts container not found in the DOM.");
        return;
    }
    renderPosts.innerHTML = '';

    socialPosts.forEach((post) => {
        let postCardHTML = buildSocialPostsCards(post);

        renderPosts.appendChild(postCardHTML);
    })
}