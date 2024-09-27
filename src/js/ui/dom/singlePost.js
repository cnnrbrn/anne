import { userData } from "../../api/constants";
import { onDeletePost } from "../post/delete";
import { formatTags } from "../../utilities/tags"; 
import { 
    createDivElement, 
    createImageElement, 
    createHeadingElement, 
    createElementParagraph } from "./domElements";

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

    const postAuthor = createElementParagraph({
        textContent: 'Post by: ' + postData.author.name
    });

    const buttonContainer = createDivElement({
        className: 'singlePostButtons'
    });

    const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn');
        deleteButton.id = 'deletePostButton';
        deleteButton.innerText = 'Delete Post';
        deleteButton.addEventListener('click', () => onDeletePost());
        deleteButton.style.display = userData.name === postData.author.name ? 'block' : 'none';

    const editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.id = 'editPostButton';
        editButton.innerText = 'Edit Post';
        editButton.style.display = userData.name === postData.author.name ? 'block' : 'none';

        editButton.addEventListener('click', () => {
            window.location.href = `/post/edit/?id=${postData.id}`;
    const commentsContainer = createElementParagraph({
        id: 'commentsContainer',
    });
        
        

    buttonContainer.append(editButton, deleteButton);
    textContainer.append(postTitle, postText, postTags, postAuthor, commentsContainer);
    renderPost.append(imageContainer, textContainer, buttonContainer);
    renderComments(postData.comments)

    return renderPost;
}

