import React, { useEffect, useState } from 'react'
import { displayAllCourses,deleteCourseById } from '../../Services/CourseService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminCourseList = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const showCourses = () => {
        displayAllCourses().then(res => {
            setCourses(res.data);
        });
    }
    useEffect(() => {
        showCourses();
    }, []);
    const returnBack = () => {
        navigate('/AdminMenu');
    }

    const removeCourse = (id) => {
        deleteCourseById(id)
            .then(() => {
                setCourses(prevCourses => prevCourses.filter(course => course.courseId !== id));
            })
            .catch(err => console.error("Error deleting course:", err));
    };

    return (
        <div className="text-center">
            <div>
                <h2 className="text-center">Course List</h2>
                <hr style={{ height: "3px", borderWidth: 0, color: "yellow", backgroundColor: "red" }} />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Course Id</th>
                                <th> Course Name</th>
                                <th> Course Hours </th>
                                <th> Course Price</th>
                                <th> Technology</th>
                                <th>Update Course</th>
                                <th>Delete Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map((course, index) => (
                                    <tr key={course.courseId}>
                                        <td>{course.courseId}</td>
                                        <td>{course.courseName}</td>
                                        <td>{course.hours}</td>
                                        <td>{course.price}</td>
                                        <td>{course.technology}</td>
                                        <td><Link to={`/update-course/${course.courseId}`}><button style={{ marginLeft: "10px" }} className="btn btn-info">Update </button></Link></td>
                                        <td><button style={{ marginLeft: "10px" }} onClick={() => removeCourse(course.courseId)} className="btn btn-danger">Delete</button></td>
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

export default AdminCourseList;