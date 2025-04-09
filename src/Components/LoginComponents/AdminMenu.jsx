import { useState } from "react";
import { FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [courseAnchor, setCourseAnchor] = useState(null);
  const [studentAnchor, setStudentAnchor] = useState(null);
  const [subscriptionAnchor,setSubscriptionAnchor] = useState(null);
  const handleMenuClick = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter) => () => {
    setter(null);
  };

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold font-serif">Education Consultancy Admin</h1>
      <div className="flex space-x-6 text-lg">
        {/* Student List Dropdown */}
        <div className="relative">
          <button onClick={handleMenuClick(setStudentAnchor)} className="px-4 py-2 text-white no-underline hover:bg-gray-700 hover:rounded-md transition flex items-center gap-2">
            Student <FaChevronDown />
          </button>
          <Menu anchorEl={studentAnchor} open={Boolean(studentAnchor)} onClose={handleClose(setStudentAnchor)}>
            <MenuItem onClick={handleClose(setStudentAnchor)}>
              <Link to="/student-list" className="text-black no-underline">student list</Link>
            </MenuItem>
            <MenuItem onClick={handleClose(setStudentAnchor)}>
              <Link to="/current-student" className="text-black no-underline">Current Student</Link>
            </MenuItem>
          </Menu>
        </div>

        {/* Course Dropdown */}
        <div className="relative">
          <button onClick={handleMenuClick(setCourseAnchor)} className="px-4 py-2 text-white no-underline hover:bg-gray-700 hover:rounded-md transition flex items-center gap-2">
            Course <FaChevronDown />
          </button>
          <Menu anchorEl={courseAnchor} open={Boolean(courseAnchor)} onClose={handleClose(setCourseAnchor)}>
            <MenuItem onClick={handleClose(setCourseAnchor)}>
              <Link to="/course-add" className="text-black no-underline">Course Addition</Link>
            </MenuItem>
            <MenuItem onClick={handleClose(setCourseAnchor)}>
              <Link to="/course-list" className="text-black no-underline">Course List</Link>
            </MenuItem>
          </Menu>
        </div>

        <div className="relative">
          <button onClick={handleMenuClick(setSubscriptionAnchor)} className="px-4 py-2 text-white no-underline hover:bg-gray-700 hover:rounded-md transition flex items-center gap-2">
            Subscription <FaChevronDown />
          </button>
          <Menu anchorEl={subscriptionAnchor} open={Boolean(subscriptionAnchor)} onClose={handleClose(setSubscriptionAnchor)}>
            <MenuItem onClick={handleClose(setCourseAnchor)}>
              <Link to="/course-subscriptions" className="text-black no-underline">Subscriptions List</Link>
            </MenuItem>
            <MenuItem onClick={handleClose(setCourseAnchor)}>
              <Link to="/current-Subscription" className="text-black no-underline">Current Subscriptions</Link>
            </MenuItem>
          </Menu>
        </div>


        <Link to="/paymentlist" className="px-4 py-2 text-white no-underline hover:bg-gray-700 hover:rounded-md transition">Payment List</Link>
        <Link to="/" className="px-4 py-2 flex items-center text-white no-underline hover:bg-red-700 hover:rounded-md transition">
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;