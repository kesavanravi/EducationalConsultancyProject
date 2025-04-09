import React,{useState} from 'react'
import { getAllStudents } from "../../Services/StudentService"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [student, setStudent] = useState([]);
        const navigate = useNavigate();
        const showStudents = () => {
            getAllStudents().then(res => {
                setStudent(res.data);
            });
        }

        useEffect(() => {
            showStudents();
        }, []);

        const returnBack = () => {
            navigate('/AdminMenu');
        }
  return (
    <div className="text-center">
            <div>
                <h2 className="text-center">Student List</h2>
                <hr style={{ height: "3px", borderWidth: 0, color: "yellow", backgroundColor: "red" }} />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> registrationNumber </th>
                                <th> Username </th>
                                <th> studentName </th>
                                <th> email </th>
                                <th> address </th>
                                <th> studentLevel</th>
                                <th> mobile </th>
                                <th> status </th>
                                <th> Update </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.map((student, index) => (
                                    <tr key={student.registrationNumber}>
                                        <td>{student.registrationNumber}</td>
                                        <td>{student.username}</td>
                                        <td>{student.studentName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.address}</td>
                                        <td>{student.studentLevel}</td>
                                        <td>{student.mobile}</td>
                                        <td>{student.status}</td>
                                        <td><Link to={`/student-update/${student.registrationNumber}`}><button style={{ marginLeft: "10px" }} className="btn btn-info">Update </button></Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <br />
                    <button style={{ marginLeft: "10px" }} onClick={() => returnBack()} className="btn btn-success">Return</button>
                </div>
            </div>
        </div>
  )
}

export default StudentList