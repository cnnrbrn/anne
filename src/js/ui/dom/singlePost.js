import { formatTags } from "../utils/utils";
import { 
    createDivElement, 
    createImageElement, 
    createHeadingElement, 
    createElementParagraph } from "./domUtils";

// createDivElement({className = '', id = ''})

// createImageElement({className = '', id = '', src = '', alt = ''})

// createHeadingElement({className = '', htmlElement, textContent})

// createElementParagraph({className = '', textContent})

export function buildSinglePost(postData) {
    const renderPost = document.getElementById('post');
    const imageContainer = createDivElement({
        className: 'single-image-container'
    });

    const textContainer = createDivElement({
        className: 'single-text-container'
    });

    const postImage = postData.media && postData.media.url ? createImageElement({
        src: postData.media.url, 
        alt: postData.media.alt 
    }) : null; 
    
    if (postImage) {
        imageContainer.appendChild(postImage); // Only append if an image exists
    }
    
    const postTitle = createHeadingElement({
        className: 'singlePost-heading',
        HTMLElement: 'h2', 
        textContent: postData.title,
    });

    const postText = createElementParagraph({
        className: 'singlePost-text', 
        textContent: postData.body
    });

    const postTags = createElementParagraph({
        textContent: formatTags(postData.tags)
    });


    textContainer.append(postTitle, postText, postTags)
    renderPost.append(imageContainer, textContainer)

    return renderPost;
}

