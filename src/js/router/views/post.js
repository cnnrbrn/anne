import { buildSinglePost } from "../../ui/dom/singlePost";
import { readSinglePost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { buildNavBar } from "../../ui/dom/nav";


async function loadPost() {
    const post = await readSinglePost();
    buildSinglePost(post);
    console.log('load post in post.js',post);
}

buildNavBar();
loadPost();
setLogoutListener();


