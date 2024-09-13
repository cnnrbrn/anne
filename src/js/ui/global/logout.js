import { onLogout } from "../auth/logout.js"

export function setLogoutListener() {
    const logoutButton = document.getElementById('logoutButton');
        logoutButton.addEventListener('click', () => {
            onLogout();
        });
    
}

console.log('hello');
