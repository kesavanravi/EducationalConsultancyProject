import React, { useState } from 'react';
import { registerNewUser } from '../../Services/LoginService';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const [educonUser, setEduconUser] = useState({
    username: '',
    password: '',
    email: '',
    category: '',
  });
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setEduconUser(values => ({ ...values, [name]: value }));
  };

  const saveNewUser = (event) => {
    event.preventDefault();
    if (educonUser.password.length < 5 || educonUser.password.length > 10) {
      alert("Password must be between 5 to 10 character long");
      return;
    }
    if (educonUser.password === password2) {
      registerNewUser(educonUser).then(() => {
        alert("User is registered successfully...Go For Login");
        navigate('/');
      });
    } else {
      alert("Passwords are not matched");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">New User Registration</h2>
        <form onSubmit={saveNewUser} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">User Name:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={educonUser.username}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={educonUser.password}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Retype/Confirm Password:</label>
            <input
              type="password"
              name="password2"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">User Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={educonUser.email}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Select Category:</label>
            <input
              list="types"
              name="category"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={educonUser.category}
              onChange={onChangeHandler}
            />
            <datalist id="types">
              <option value="Student" />
              <option value="Admin" />
            </datalist>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;