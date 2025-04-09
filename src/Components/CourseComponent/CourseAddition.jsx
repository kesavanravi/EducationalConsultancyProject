import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateCourseId, saveCourse } from '../../Services/CourseService';

const CourseAddition = () => {
  const [course, setCourse] = useState({
    courseId: 0,
    courseName: "",
    hours: 0,
    price: 0.0,
    technology: ""
  });

  const [newId, setNewId] = useState(0);
  const navigate = useNavigate();

  const showCourseId = () => {
    generateCourseId().then(response => {
      setNewId(response.data);
    });
  };

  useEffect(() => {
    showCourseId();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCourse(values => ({ ...values, [name]: value }));
  };

  const courseSave = (event) => {
    event.preventDefault();
    course.courseId = newId;
    saveCourse(course).then(() => {
      alert("New Course is saved");
      navigate('/AdminMenu');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 underline">New Course Addition</h2>
        <form onSubmit={courseSave} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Course Name:</label>
            <input
              type="text"
              name="courseName"
              placeholder="Course Name"
              value={course.courseName}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Hours:</label>
            <input
              type="number"
              name="hours"
              placeholder="Hours"
              value={course.hours}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Price:</label>
            <input
              type="number"
              step="0.01"
              name="price"
              placeholder="Price"
              value={course.price}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Technology:</label>
            <input
              type="text"
              name="technology"
              placeholder="Technology"
              value={course.technology}
              onChange={onChangeHandler}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseAddition;