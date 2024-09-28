import { register } from '../../api/auth/register';

export async function onRegister(event) {
  event.preventDefault();

  const registerUserData = Object.fromEntries(new FormData(event.target));

  register(registerUserData);
}
