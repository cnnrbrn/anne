import { 
    createDivElement, 
    createImageElement, 
    createHeadingElement, 
    createElementParagraph } from "./domUtils";

    // import { readSinglePost } from "../../api/post/read";

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

    const postImage = createImageElement({
        src: postData.media.url, 
        alt: postData.media.alt
    }); 
    
    const postTitle = createHeadingElement({
        className: 'singlePost-heading',
        HTMLElement: 'h2', 
        textContent: postData.title
    });

    const postText = createElementParagraph({
        className: 'singlePost-text', 
        textContent: postData.body
    });

    const postTags = createElementParagraph({
        textContent: postData.tags
    });


    textContainer.append(postTitle, postText, postTags)
    imageContainer.appendChild(postImage)
    renderPost.append(imageContainer, textContainer)

    return renderPost;
}

