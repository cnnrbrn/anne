import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { authGuard } from "../../utilities/authGuard";

setLogoutListener();
readPosts();
authGuard();
