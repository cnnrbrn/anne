
import { createImageElement } from "./domElements";

// createDivElement({className = '', id = ''})

export function buildNavBar() {
    const header = document.querySelector('header');

    const nav = document.createElement('nav');
    
    
    const logo = createImageElement({
        src: '/images/noroff-logo.png',
        className: 'nav-logo'
    });
    
    const ul = document.createElement('ul');
        ul.style.display = localStorage.accessToken ? 'flex' : 'none';

    const home = document.createElement('a');
        home.href = '/';
        home.textContent = 'Home';
        home.style.display = localStorage.accessToken ? 'block' : 'none';

    const create = document.createElement('a');
        create.href = '/post/create/';
        create.textContent = 'Create Post';
        create.style.display = localStorage.accessToken ? 'block' : 'none';

    const profile = document.createElement('a');
        profile.href = '/profile/';
        profile.textContent = 'Profile';
        profile.style.display = localStorage.accessToken ? 'block' : 'none';

    const logoutButton = document.createElement('button');
        logoutButton.id = 'logoutButton';
        logoutButton.textContent = 'Logout'
        logoutButton.classList.add('nav-btn');
        logoutButton.style.display = localStorage.accessToken ? 'block' : 'none';


    const loginButton = document.createElement('button');
        loginButton.id = 'loginButton';
        loginButton.textContent = 'Login';
        loginButton.classList.add('nav-btn');
        loginButton.addEventListener('click', () => {
            window.location.href = '/auth/login/'
        })
        loginButton.style.display = localStorage.accessToken ? 'none' : 'block';
        

    const registerButton = document.createElement('button');
        registerButton.id = 'registerButton';
        registerButton.textContent = 'Register';
        registerButton.classList.add('nav-btn');
        registerButton.addEventListener('click', () => {
            window.location.href = '/auth/register/'
        })
        registerButton.style.display = localStorage.accessToken ? 'none' : 'block';


    ul.append(home, create, profile, logoutButton, loginButton, registerButton);
    nav.append(logo, ul);
    header.append(nav);
}