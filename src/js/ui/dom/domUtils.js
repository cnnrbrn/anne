export function createImageElement({className = '', id = '', src = '', alt = ''}) {
    const elementImage = Object.assign(document.createElement('img'), {
        className, id, src, alt
    });

    if (className) elementImage.classList.add(className);

    return elementImage;
}

export function createDivElement({className = '', id = ''}) {
    const elementDiv = document.createElement('div');
    if (className) {
        elementDiv.classList.add(className);
    }
    if (id) {
        elementDiv.id = id;
    }
    return elementDiv;
}

export function createHeadingElement({className = '', htmlElement, textContent}) {
    const elementHeading = document.createElement(htmlElement);
    elementHeading.textContent = textContent;
    if (className) {
        elementHeading.classList.add(className);
    }
    return elementHeading;
}

export function createElementParagraph({className = '', textContent}) {
    const elementParagraph = document.createElement('p');

    if (className) {
        elementParagraph.classList.add(className);
    }
    if (textContent) {
        elementParagraph.textContent = textContent;
    }
    return elementParagraph;
}