import React,{useState} from 'react'
import {updateStudent,getStudentById} from "../../Services/StudentService"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StudentUpdate = () => {
    const [student, setStudent] = useState({
        registrationNumber: 0,
        studentName:"",
        address: "",
        mobile: "",
        studentLevel: "",
    });
    const navigate = useNavigate();
    const {studentId} = useParams();


    useEffect(()=>{
        getStudentById(studentId).then(res =>{
            setStudent(res.data);
          }).catch(err => console.log(err))
        },[studentId])
      const onChangeHandler = (event) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        setStudent(values => ({ ...values, [name]: value }));
      };

    
    const studentSave = (event) => {
        event.preventDefault();
        // student.registrationNumber = newId;
        // alert(""+course.courseId);
        updateStudent(student).then(response => {
          alert(" student is Updated");
          navigate('/AdminMenu');
        });
    }
  return (
    <div>
    <br></br>
    <div className="container">
      <div className="row">
        <div className="card col-md-12 offset-md-3 offset-md-3">
          <div className="card-body">
            <h2 className="text-center"><u>Student Update</u></h2>
            <br />
            <div className="form-group">
              <label>registrationNumber: </label>
              <input placeholder="registrationNumber" name="studentLevel" className="form-control"
                value={student.registrationNumber}  />
            </div>
            <div className="form-group">
              <label>username: </label>
              <input placeholder="username" name="username" className="form-control"
                value={student.username} />
            </div>
            <div className="form-group">
              <label>studentName: </label>
              <input placeholder="studentName" name="studentName" className="form-control"
                value={student.studentName}  />
            </div>
            <div className="form-group">
              <label>email: </label>
              <input placeholder="email" name="email" className="form-control"
                value={student.email} />
            </div>
            <div className="form-group">
              <label>address: </label>
              <input placeholder="address" name="address" className="form-control"
                value={student.address} onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
              <label>mobile: </label>
              <input placeholder="mobile" name="mobile" className="form-control"
                value={student.mobile} onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
              <label>studentLevel: </label>
              <input placeholder="studentLevel" name="studentLevel" className="form-control"
                value={student.studentLevel} onChange={onChangeHandler} />
            </div>
            <div className="form-group">
              <label> Status: </label>
              <input placeholder="status" name="status" className="form-control"
                value={student.status} onChange={onChangeHandler} />
            </div>

            <button className="btn btn-success" onClick={studentSave}>Save</button>


          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StudentUpdate