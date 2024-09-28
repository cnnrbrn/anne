import {
  createDivElement,
  createImageElement,
  createHeadingElement,
  createElementParagraph,
} from './domElements';

export function buildSocialPostsCards(postData) {
  const postCard = createDivElement({
    className: 'post-card',
  });

  const contentContainer = createDivElement({
    className: 'social-posts-content',
  });
  contentContainer.addEventListener('click', () => {
    window.location.href = `/post/?id=${postData.id}`;
  });

  const imageContainer = createDivElement({
    className: 'card-image-container',
  });

  if (postData.media && postData.media.url) {
    const postImage = createImageElement({
      className: 'post-card-image',
      id: postData.id,
      src: postData.media.url,
      alt: postData.media.alt,
    });

    imageContainer.appendChild(postImage);
  }

  const textContainer = createDivElement({
    className: 'card-text-container',
    id: 'cardTextContainer',
  });

  const postTitle = createHeadingElement({
    className: 'post-card-title',
    htmlElement: 'h2',
    textContent: postData.title,
  });

  const postText = createElementParagraph({
    className: 'post-card-text',
    textContent: postData.body,
  });

  const postAuthor = createElementParagraph({
    textContent: 'Post by: ' + postData.author.name,
  });

  const buttonContainer = createDivElement({
    className: 'singlePostButtons',
  });

  const commentsContainer = createElementParagraph({
    id: 'commentsContainer',
    textContent: 'Comments: ' + postData._count.comments,
  });

  textContainer.append(postTitle, postText, postAuthor, commentsContainer);
  contentContainer.append(imageContainer, textContainer);
  postCard.append(contentContainer, buttonContainer);

  return postCard;
}

export function renderSocialPosts(socialPosts) {
  let renderPosts = document.getElementById('posts');

  if (!renderPosts) {
    console.error('Posts container not found in the DOM.');
    return;
  }
  renderPosts.innerHTML = '';

  socialPosts.forEach((post) => {
    let postCardHTML = buildSocialPostsCards(post);

    renderPosts.appendChild(postCardHTML);
  });
}
