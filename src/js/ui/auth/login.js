import { login } from '../../api/auth/login';

/**
 * Handles the login form submission and sends user credentials for authentication.
 *
 * @function onLogin
 * @param {Event} event - Form submission event
 * @returns {Promise<object>} A promise that on successful login resolves user data.
 *
 * @description
 * This function prevents the default form submission behavior, gathers form data,
 * and passes the login credentials to the `login` function. It handles the login process
 * asynchronously and waits for the result of the login attempt.
 *
 * @example
 * const form = document.forms.login;
 * form.addEventListener("submit", onLogin);
 */

export async function onLogin(event) {
  event.preventDefault();

  const loginUserData = Object.fromEntries(new FormData(event.target));

  await login(loginUserData);
}
