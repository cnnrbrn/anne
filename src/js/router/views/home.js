import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { renderSocialPosts } from "../../ui/dom/socialPosts";
import { authGuard } from "../../utilities/authGuard";


setLogoutListener();
authGuard();


// async function initialize() {
//     const {posts, meta } = await readPosts();
//     if (posts && posts.length > 0)
//         renderSocialPosts(posts, meta)
    
    
//     // console.log('posts: ', posts);
// }



async function loadPosts() {
    const {posts} = await readPosts();
    renderSocialPosts(posts)
    // console.log(posts);
}

loadPosts();