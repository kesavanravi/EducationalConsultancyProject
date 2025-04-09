import React,{useState} from 'react'
import {getStudentDetail} from "../../Services/StudentService"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDetail = ({ studentId }) => {
  const [student, setStudent] = useState({
    registrationNumber: 0,
    studentName: "",
    address: "",
    mobile: "",
    studentLevel: "",
  });
  const navigate = useNavigate();
  const onNavigate=()=>{
    navigate("/StudentMenu")
  }
  useEffect(() => {
    getStudentDetail(studentId).then(res => {
      setStudent(res.data);
    }).catch(err => console.log(err))
  }, [studentId])


  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center border-b pb-2 mb-4">Student Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DetailItem label="Registration Number" value={student.registrationNumber} />
          <DetailItem label="Username" value={student.username} />
          <DetailItem label="Student Name" value={student.studentName} />
          <DetailItem label="Email" value={student.email} />
          <DetailItem label="Address" value={student.address} />
          <DetailItem label="Mobile" value={student.mobile} />
          <DetailItem label="Student Level" value={student.studentLevel} />
          <DetailItem label="Status" value={student.status} />
        </div>
        <div className="mt-6 flex justify-center">
          <button 
            onClick={onNavigate} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Return
          </button>
        </div>
      </div>
    </div>
    </div>
  )
};
const DetailItem = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
    <p className="text-sm font-semibold text-gray-600">{label}</p>
    <p className="text-lg text-gray-800 font-medium">{value || "N/A"}</p>
  </div>
);

export default StudentDetail