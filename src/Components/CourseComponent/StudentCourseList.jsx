import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { displayAllCourses } from '../../Services/CourseService';

const StudentCourseList = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const showCourses = () => {
        displayAllCourses().then(response => {
            setCourses(response.data);
        });
    };

    const returnBack = () => {
        navigate('/StudentMenu');
    };

    const subscriptionCourse = (courseId) => {
        navigate(`/course-subscription/${courseId}`);
    };

    useEffect(() => {
        showCourses();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Student Course List</h2>
                <hr className="border-t-4 border-red-500 mb-6" />

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead>
                            <tr className="bg-blue-100 text-gray-700">
                                <th className="px-4 py-2 border">Course Id</th>
                                <th className="px-4 py-2 border">Course Name</th>
                                <th className="px-4 py-2 border">Course Hours</th>
                                <th className="px-4 py-2 border">Course Price</th>
                                <th className="px-4 py-2 border">Technology</th>
                                <th className="px-4 py-2 border">Register Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.courseId} className="text-center hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{course.courseId}</td>
                                    <td className="px-4 py-2 border">{course.courseName}</td>
                                    <td className="px-4 py-2 border">{course.hours}</td>
                                    <td className="px-4 py-2 border">{course.price}</td>
                                    <td className="px-4 py-2 border">{course.technology}</td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => subscriptionCourse(course.courseId)}
                                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Register
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={returnBack}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentCourseList;