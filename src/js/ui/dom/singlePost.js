import { 
    createDivElement, 
    createImageElement, 
    createHeadingElement, 
    createElementParagraph } from "./domUtils";

export function buildSinglePost() {
    const renderPost = document.getElementById('post');

    const singlePost = createDivElement({
        className: 'single-post'
    });

    
    renderPost.append(singlePost)

    console.log(renderPost);
    
}