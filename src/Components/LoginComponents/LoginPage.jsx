import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../../Services/LoginService';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const checkLogin = (e) => {
        e.preventDefault();
        validateUser(username, password).then((response) => {
            let role = String(response.data);
            if (role === "Admin")
                navigate('/AdminMenu');
            else if (role === "Student")
                navigate('/StudentMenu');
            else
                alert("Wrong Userid/Password");
        });
    }

    const registerNewUser = () => {
        navigate('/Register');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-blue-600 underline mb-6">Login Page</h2>
                <form onSubmit={checkLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">User Name:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Password:</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                        onClick={registerNewUser}
                    >
                        Register New User
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;