import { login } from '../../api/auth/login';

export async function onLogin(event) {
  event.preventDefault();

  const loginUserData = Object.fromEntries(new FormData(event.target));

  login(loginUserData);
}
