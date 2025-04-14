export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
