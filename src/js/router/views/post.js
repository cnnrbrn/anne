// alert("Single Post Page");

import { buildSinglePost } from "../../ui/dom/singlePost";
import { readSinglePost } from "../../api/post/read";

async function loadPost() {
    const post = await readSinglePost();
    buildSinglePost(post)
    console.log('load post',post);
}

loadPost();

