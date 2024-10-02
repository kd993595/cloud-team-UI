const API_URL = 'http://127.0.0.1:7979';

export const userSignup = async (username: string, email: string, password: string) => {  
  const response = await fetch(`${API_URL}/userAuth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });
    // console.log(response);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Error creating user');
    }

    return response.json();
};

export const userLogin = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/userAuth?username=${username}&password=${password}`, {
        method: 'GET'
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Error authenticating user');
    }

    return response.json();
};