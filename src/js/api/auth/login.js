import { API_AUTH_LOGIN } from "../constants";

export async function login({ email, password }) {
    const body = JSON.stringify({
        email: email,
        password: password 
    });
    
    try {
        const response = await fetch(API_AUTH_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body,
        });

        if (response.ok) {
            const {data: {accessToken}} = await response.json();
            localStorage.setItem('accessToken', accessToken);
            window.location.href = '/';
        }
    } catch (error) {
        alert('Could not log in to user account')
        console.log(error);
    }    
}
