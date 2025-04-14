import React, { useState } from 'react';
import { loginUser } from './apiService'; // Import the login API function

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            if (response.message === 'Login successful') {
                setMessage('Welcome!');
                // Optionally redirect or store user data in localStorage
            } else {
                setMessage(response.message);
            }
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    return (
        <div className="login-page flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleLogin}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
            {message && <p className="text-red-500">{message}</p>}
        </div>
    );
};

export default Login;
