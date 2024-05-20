const apiUrl = 'http://localhost:8000/v1/login';

const handleLogin = async (credentials) => {
    const username = credentials.username;
    const password = credentials.password;
    try {
        let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorizzation': 'Bearer '
            },
            body: JSON.stringify({ username, password })
        })
        return await response.json();

    }
    catch (error) {
        console.log(error);
        console.error('Errore durante il login:', error);
        return { error: 'Errore durante il login' };

    }
}
export {handleLogin}