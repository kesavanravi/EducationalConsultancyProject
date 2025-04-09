import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {updateCourse,displayCourseById} from '../../Services/CourseService';

const CourseUpdate = () => {
    const [course, setCourse] = useState({
        courseId:0,
        courseName: "",
        hours: 0,
        price: 0.0,
        technology: ""
      });
    const {courseId} = useParams();
    const navigate = useNavigate();
    const onChangeHandler = (event) => {
      event.persist();
      const name = event.target.name;
      const value = event.target.value;
      setCourse(values => ({ ...values, [name]: value }));
    };

    useEffect(()=>{
      displayCourseById(courseId).then(res =>{
        setCourse(res.data);
      }).catch(err => console.log(err))
    },[courseId])
    const courseSave = (event) => {
        event.preventDefault();
        // alert(""+course.courseId);
        updateCourse(course).then(response => {
          alert("Course is updated");
          navigate('/course-list');
        }).catch(err => console.log(err));
      }
  return (
    <div>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="card col-md-12 offset-md-3 offset-md-3">
            <div className="card-body">
              <h2 className="text-center"><u>Course Updation</u></h2>
              <br />
              <div className="form-group">
                <label> courseId: </label>
                <input placeholder="courseId" name="courseId" className="form-control"
                  value={course.courseId}  />
              </div>
              <div className="form-group">
                <label> CourseName: </label>
                <input placeholder="courseName" name="courseName" className="form-control"
                  value={course.courseName} />
              </div>
              <div className="form-group">
                <label>Hours: </label>
                <input placeholder="hours" name="hours" className="form-control"
                  value={course.hours} onChange={onChangeHandler} />
              </div>
              <div className="form-group">
                <label> Price: </label>
                <input placeholder="Price" name="price" className="form-control"
                  value={course.price} onChange={onChangeHandler} />
              </div>

              <div className="form-group">
                <label> Technology: </label>
                <input placeholder="Technology" name="technology" className="form-control"
                  value={course.technology} />
              </div>

              <button className="btn btn-success" onClick={courseSave}>Save</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseUpdate