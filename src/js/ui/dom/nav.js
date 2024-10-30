import { DISPLAY_BLOCK, DISPLAY_NONE } from '../../api/constants';
import {
  createImageElement,
  createElementHref,
  createElementButton,
  createDivElement,
} from './domElements';

export function buildNavBar() {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');
  nav.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'max-w-7xl',
    'w-full',
    'text-lg',
    'font-semibold'
  );

  const logo = createImageElement({
    src: '/images/noroff-logo1.png',
    className: ['nav-logo', 'h-6', 'md:h-8'],
  });
  logo.addEventListener('click', () => (window.location.href = '/'));

  const ul = document.createElement('ul');
  ul.classList.add('hidden', 'md:flex', 'gap-4');

  const burgerMenu = document.createElement('i');
  burgerMenu.classList.add(
    'fa-solid',
    'fa-bars',
    'fa-lg',
    'text-white',
    'md:hidden'
  );
  burgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');

    if (burgerMenu.classList.contains('fa-bars')) {
      burgerMenu.classList.replace('fa-bars', 'fa-xmark');
    } else {
      burgerMenu.classList.replace('fa-xmark', 'fa-bars');
    }
  });

  const dropdownMenu = createDivElement({
    className: [
      'absolute',
      'hidden',
      'top-12',
      'left-0',
      'w-full',
      'bg-purpleDark',
      'text-white',
      'py-12',
      'font-sans',
      'font-semibold',
      'text-base',
      'flex',
      'flex-col',
      'items-center',
      'h-screen',
      'gap-4',
    ],
  });

  const home = createElementHref({
    href: '/',
    textContent: 'Home',
  });
  home.style.display = DISPLAY_BLOCK;

  const create = createElementHref({
    href: '/post/create/',
    textContent: 'Create Post',
  });
  create.style.display = DISPLAY_BLOCK;

  const profile = createElementHref({
    href: '/profile/',
    textContent: 'Profile',
  });
  profile.style.display = DISPLAY_BLOCK;

  const loginButton = createElementButton({
    id: 'loginButton',
    className: 'nav-btn',
    textContent: 'Login',
  });
  loginButton.addEventListener('click', () => {
    window.location.href = '/auth/login/';
  });
  loginButton.style.display = DISPLAY_NONE;

  const logoutButton = createElementButton({
    id: 'logoutButton',
    className: 'nav-btn',
    textContent: 'Logout',
  });
  logoutButton.style.display = DISPLAY_BLOCK;

  const registerButton = createElementButton({
    id: 'registerButton',
    className: 'nav-btn',
    textContent: 'Register',
  });
  registerButton.addEventListener('click', () => {
    window.location.href = '/auth/register/';
  });
  registerButton.style.display = DISPLAY_NONE;

  burgerMenu.append(dropdownMenu);

  dropdownMenu.append(
    home.cloneNode(true),
    create.cloneNode(true),
    profile.cloneNode(true),
    loginButton.cloneNode(true),
    logoutButton.cloneNode(true),
    registerButton.cloneNode(true)
  );
  ul.append(home, create, profile, logoutButton, loginButton, registerButton);
  nav.append(logo, ul, burgerMenu);
  header.append(nav);
}
