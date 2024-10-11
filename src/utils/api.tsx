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


export const addPreference = async (preference_id: number, user_id: number, food_id: number) => {
    const response = await fetch(`${API_URL}/addPref`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ preference_id, user_id, food_id })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error adding preference');
    }

    return response.json();
};

export const getPreferences = async (user_id: number) => {
    const response = await fetch(`${API_URL}/getPref`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error getting preferences');
    }

    return response.json();
};