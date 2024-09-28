import { createPost } from '../../api/post/create';

export async function onCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const imageUrl = form.get('image');
  const altText = form.get('alt');

  const createNewPost = {
    title: form.get('postTitle'),
    body: form.get('postText'),
    tags: form.get('tags')
      ? form
          .get('tags')
          .split(', ')
          .map((tag) => tag.trim())
      : [],
    media:
      imageUrl && altText
        ? {
            url: imageUrl,
            alt: altText,
          }
        : null,
  };

  console.log('Formed new Data:', createNewPost);
  createPost(createNewPost);
}
