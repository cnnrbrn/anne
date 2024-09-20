import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { renderSocialPosts } from "../../ui/dom/socialPosts";
import { authGuard } from "../../utilities/authGuard";

let currentPage = 1;
const limit = 12;

const nextButton = document.getElementById('paginationNext');
const backButton = document.getElementById('paginationBack');
const firstPageButton = document.getElementById('paginationFirstPage');
const lastPageButton = document.getElementById('paginationLastPage');


nextButton.addEventListener('click', async () => {
    currentPage++;
    loadPosts();
});

backButton.addEventListener('click', async () => {
    currentPage--;
    loadPosts();
});

firstPageButton.addEventListener('click', async () => {
    currentPage = 1;
    loadPosts();
})

lastPageButton.addEventListener('click', async () => {
    const { meta } = await readPosts(limit, currentPage);
    currentPage = meta.pageCount;
    loadPosts();
})


async function loadPosts() {
    try {
        const { posts, meta } = await readPosts(limit, currentPage);

        if (posts && posts.length > 0) {
            renderSocialPosts(posts);
            showPageInfo(meta.currentPage, meta.pageCount, meta.totalCount);
            
            nextButton.style.display = meta.isLastPage ? 'none' : 'block';
            backButton.style.display = meta.isFirstPage ? 'none' : 'block';
            firstPageButton.style.display = meta.isFirstPage ? 'none' : 'block';
            lastPageButton.style.display = meta.isLastPage ? 'none' : 'block';
        } 
    } catch (error) {
        console.error('Error loading posts: ', error);
    }
}



function showPageInfo(currentPage, totalPages, totalCount) {
    const pageInfoElement = document.getElementById('pageInfo');
    if (pageInfoElement) {
        pageInfoElement.textContent = `Page ${currentPage} of ${totalPages} - Total Posts: ${totalCount}`;
    } else {
        console.error('No page info element found.');
    }
}




async function init() {
    const {posts} = await readPosts();
    renderSocialPosts(posts);
    // console.log(posts);
}

loadPosts()
setLogoutListener();
authGuard();
init();