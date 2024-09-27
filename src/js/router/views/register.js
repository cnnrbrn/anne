import { onRegister } from "../../ui/auth/register";
import { buildNavBar } from "../../ui/dom/nav";

const form = document.forms.register;

form.addEventListener("submit", onRegister);


buildNavBar();