import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";


export async function register({ name, email, password }) {
    
    try {
        const response = await fetch(API_AUTH_REGISTER, {
            method: 'POST',
            headers: headers(), 
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            alert('Failed to register user, please try again')
        } else {
            alert(`User ${name}  registered successfully`)
            const data = await response.json();
            window.location.href = '/auth/login/'
            return data;
        }
    } catch (error) {
        alert('Could not register new user account')
        console.log(error);
    }
}