import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

export async function register({ name, email, password}) {
  const body = JSON.stringify({
    name, 
    email, 
    password
  });

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: headers(), 
      body,
    });

    if (response.ok) {
      const data = await response.json();
      window.location.href = '/auth/login/'
      return data;
    } 
  } catch (error) {
    alert('Could not register new user account')
    console.log(error);
  }
}

