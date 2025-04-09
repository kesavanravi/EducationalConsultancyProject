import React, { useState, useEffect } from 'react';
import { saveStudent, generateRegistration, getStudentStatusByUsername } from "../../Services/StudentService";
import { useNavigate } from 'react-router-dom';

const StudentAddition = () => {
  const [student, setStudent] = useState({
    registrationNumber: 0,
    studentName: "",
    address: "",
    mobile: "",
    studentLevel: "",
  });

  const [newId, setNewId] = useState(0);
  const navigate = useNavigate();

  const showStudentId = () => {
    generateRegistration().then(response => {
      setNewId(response.data);
    });
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const studentSave = (event) => {
    event.preventDefault();
    student.registrationNumber = newId;
    saveStudent(student).then(() => {
      alert("New student is saved");
      navigate('/StudentMenu');
    });
  };

  const checkStatus = () => {
    getStudentStatusByUsername().then(response => {
      if (response.data === true || response.data === false) {
        alert("Student is already registered...");
        navigate("/StudentMenu");
      } else {
        showStudentId();
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-blue-100 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 underline">New Student Addition</h2>
        <form onSubmit={studentSave} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Student Name</label>
            <input
              type="text"
              name="studentName"
              placeholder="Enter student name"
              value={student.studentName}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={student.address}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Student Level</label>
            <input
              type="text"
              name="studentLevel"
              placeholder="Enter student level"
              value={student.studentLevel}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={student.mobile}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentAddition;