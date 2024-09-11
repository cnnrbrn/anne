import { login } from "../../api/auth/login";

export async function onLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const loginUserData = Object.fromEntries(new FormData(form));
    
    login(loginUserData);
}
