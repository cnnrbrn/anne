// alert("Single Post Page");

import { buildSinglePost } from "../../ui/dom/singlePost";
import { readSinglePost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { buildNavBar } from "../../ui/dom/nav";


const id = new URLSearchParams(window.location.search).get('id');

const editButton = document.getElementById('editPostButton');
    editButton.addEventListener('click', () => {
        window.location.href = `/post/edit/?id=${id}`;
    });


async function loadPost() {
    const post = await readSinglePost();
    buildSinglePost(post);
    console.log('load post in post.js',post);
}

buildNavBar();
loadPost();
setLogoutListener();


