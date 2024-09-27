import { onLogin } from "../../ui/auth/login";
import { buildNavBar } from "../../ui/dom/nav";

const form = document.forms.login;

form.addEventListener("submit", onLogin);


buildNavBar();