import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { renderSocialPosts } from "../../ui/dom/socialPosts";
import { authGuard } from "../../utilities/authGuard";


setLogoutListener();
authGuard();


async function loadPosts() {
    const {posts} = await readPosts();
    renderSocialPosts(posts);
    // console.log(posts);
}

loadPosts();