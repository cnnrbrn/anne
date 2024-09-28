import { updatePost } from '../../api/post/update';

export async function onUpdatePost(event, id) {
  event.preventDefault();

  console.log('Post ID fetched from URL:', id);

  const form = new FormData(event.target);

  const imageUrl = form.get('image');
  const altText = form.get('alt');

  const editedData = {
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

  console.log('Formed new Data:', editedData);
  updatePost(id, editedData);
}

console.log('ui/post/update.js');
