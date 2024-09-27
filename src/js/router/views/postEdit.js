import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { onUpdatePost } from "../../ui/post/update";
import { readSinglePost } from "../../api/post/read";
import { buildNavBar } from "../../ui/dom/nav";


async function viewFormData() {
    const post = await readSinglePost();

    if (post) {
        document.getElementById('postTitle').value = post.title || '';
        document.getElementById('postText').value = post.body || '';
        document.getElementById('tags').value = post.tags ? post.tags.join(', ') : ''; 
        document.getElementById('imageUrl').value = post.media?.url || ''; 
        document.getElementById('imageAlt').value = post.media?.alt || '';
    };
};


const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);


buildNavBar();
setLogoutListener();
authGuard();
viewFormData();