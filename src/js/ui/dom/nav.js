
import { 
    createImageElement, 
    createElementHref, 
    createElementButton } from "./domElements";

// createDivElement({className = '', id = ''})

const ifToken = localStorage.accessToken ? 'block' : 'none';
const noToken = localStorage.accessToken ? 'none' : 'block';

export function buildNavBar() {
    const header = document.querySelector('header');
    
    const nav = document.createElement('nav');
    
    const logo = createImageElement({
        src: '/images/noroff-logo.png',
        className: 'nav-logo'
        });
        
    const ul = document.createElement('ul');
    
    const home = createElementHref({
        href: '/',
        textContent: 'Home'
        });
        home.style.display = ifToken;
        
    const create = createElementHref({
        href: '/post/create/',
        textContent: 'Create Post'
        });
        create.style.display = ifToken;
        
    const profile = createElementHref({
        href: '/profile/',
        textContent: 'Profile'
        });
        profile.style.display = ifToken;
        
    const loginButton = createElementButton({
        id: 'loginButton',
        className: 'nav-btn',
        textContent: 'Login'
        });
        loginButton.addEventListener('click', () => {
            window.location.href = '/auth/login/'
        });
        loginButton.style.display = noToken;
        
    const logoutButton = createElementButton({
        id: 'logoutButton',
        className: 'nav-btn',
        textContent: 'Logout'
        });
        logoutButton.style.display = ifToken;
        
    const registerButton = createElementButton({
        id: 'registerButton',
        className: 'nav-btn',
        textContent: 'Register'
        });
        registerButton.addEventListener('click', () => {
            window.location.href = '/auth/register/'
        });
        registerButton.style.display = noToken;
        
        
    ul.append(home, create, profile, logoutButton, loginButton, registerButton);
    nav.append(logo, ul);
    header.append(nav);
}


