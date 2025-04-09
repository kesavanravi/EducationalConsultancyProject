import { useState } from "react";
import { FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [studentAnchor, setStudentAnchor] = useState(null);
  const [courseAnchor, setCourseAnchor] = useState(null);
  const [paymentAnchor, setPaymentAnchor] = useState(null);

  const openStudent = Boolean(studentAnchor);
  const openCourse = Boolean(courseAnchor);
  const openPayment = Boolean(paymentAnchor);

  const handleMenuClick = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (setAnchor) => {
    setAnchor(null);
  };

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold font-serif text-center md:text-left">
          Education Consultancy Student
        </h1>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm md:text-base">
          {/* Student */}
          <div className="relative">
            <button
              onClick={(e) => handleMenuClick(e, setStudentAnchor)}
              className="flex items-center gap-1 px-4 py-2 hover:bg-gray-700 rounded-md transition"
            >
              Student <FaChevronDown className="text-xs" />
            </button>
            <Menu
              anchorEl={studentAnchor}
              open={openStudent}
              onClose={() => handleClose(setStudentAnchor)}
            >
              <MenuItem onClick={() => handleClose(setStudentAnchor)}>
                <Link to="/student-add" className="text-black no-underline">
                  Student Addition
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleClose(setStudentAnchor)}>
                <Link to="/student-detail" className="text-black no-underline">
                  Student Detail
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Course */}
          <div className="relative">
            <button
              onClick={(e) => handleMenuClick(e, setCourseAnchor)}
              className="flex items-center gap-1 px-4 py-2 hover:bg-gray-700 rounded-md transition"
            >
              Course <FaChevronDown className="text-xs" />
            </button>
            <Menu
              anchorEl={courseAnchor}
              open={openCourse}
              onClose={() => handleClose(setCourseAnchor)}
            >
              <MenuItem onClick={() => handleClose(setCourseAnchor)}>
                <Link to="/student-course-list" className="text-black no-underline">
                  Course List
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleClose(setCourseAnchor)}>
                <Link to="/course-subscription-list" className="text-black no-underline">
                  Course Subscription List
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Payment */}
          <div className="relative">
            <button
              onClick={(e) => handleMenuClick(e, setPaymentAnchor)}
              className="flex items-center gap-1 px-4 py-2 hover:bg-gray-700 rounded-md transition"
            >
              Payment <FaChevronDown className="text-xs" />
            </button>
            <Menu
              anchorEl={paymentAnchor}
              open={openPayment}
              onClose={() => handleClose(setPaymentAnchor)}
            >
              <MenuItem onClick={() => handleClose(setPaymentAnchor)}>
                <Link to="/studentpaymentlist" className="text-black no-underline">
                  Payment Report
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Logout */}
          <Link
            to="/"
            className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition"
          >
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;