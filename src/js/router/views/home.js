import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { buildNavBar } from "../../ui/dom/nav";
import { loadPosts } from "../../utilities/pagination";




loadPosts();
buildNavBar();
setLogoutListener();
authGuard();
