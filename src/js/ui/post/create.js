import { createPost } from '../../api/post/create';

export async function onCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const imageUrl = form.get('image');
  const altText = form.get('alt');

  const getForms = {
    title: form.get('postTitle'),
    body: form.get('postText'),
    tags: form.get('tags')
      ? form
          .get('tags')
          .split(', ')
          .map((tag) => tag.trim())
      : [],
    media: imageUrl || altText ? { url: imageUrl, alt: altText } : null,
  };

  try {
    await createPost(getForms);
  } catch (error) {
    console.error('Failed to create post:', error);
    alert('There was an error creating your post. Please try again.');
  }
}
