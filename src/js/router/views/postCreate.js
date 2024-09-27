import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { buildNavBar } from "../../ui/dom/nav";



const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);

buildNavBar();
setLogoutListener();
authGuard();