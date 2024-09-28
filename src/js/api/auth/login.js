import { API_AUTH_LOGIN } from '../constants';
import { headers } from '../headers';

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      alert('Failed to login, wrong email or password');
    } else {
      const data = await response.json();
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userData', JSON.stringify(data.data));
      window.location.href = '/';
    }
  } catch (error) {
    alert('Could not log in to user account');
    console.log(error);
  }
}
