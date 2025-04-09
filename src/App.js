import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from "./Components/LoginComponents/LoginPage"
import StudentMenu from './Components/LoginComponents/StudentMenu';
import AdminMenu from './Components/LoginComponents/AdminMenu';
import RegisterUser from './Components/LoginComponents/RegisterUser';
import CourseAddition from './Components/CourseComponent/CourseAddition';
import CourseList from './Components/CourseComponent/AdminCourseList';
import CourseUpdate from './Components/CourseComponent/CourseUpdate';
import StudentCourseList from './Components/CourseComponent/StudentCourseList';
import StudentAddition from './Components/StudentComponent/StudentAddition';
import StudentList from './Components/StudentComponent/StudentList';
import StudentDetail from './Components/StudentComponent/StudentDetail';
import StudentUpdate from './Components/StudentComponent/StudentUpdate';
import StudentCurrent from './Components/StudentComponent/StudentCurrent';
import CourseSubscription from './Components/SubscriptionComponents/CourseSubscription';
import { useState } from 'react';
import CourseSubscriptionList from './Components/SubscriptionComponents/CourseSubscriptionList';
import SubscriptionList from './Components/SubscriptionComponents/Subscription';
import SubscriptionUpdate from './Components/SubscriptionComponents/SubscriptionUpdate';
import CurrentSubscriptionList from './Components/SubscriptionComponents/CurrentSubscription';
import Payment from './Components/PaymentComponents/Payment';
import StudentPaymentList from './Components/PaymentComponents/StudentPayment';
import PaymentList from './Components/PaymentComponents/PaymentList';

function App() {
  const [subs,setSubs] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/Register" element={<RegisterUser></RegisterUser>}></Route>
          <Route path="/AdminMenu" element={<AdminMenu></AdminMenu>}></Route>
          <Route path="/StudentMenu" element={<StudentMenu></StudentMenu>}></Route>
          <Route path='/course-add' element={<CourseAddition></CourseAddition>}></Route>
          <Route path='/course-list' element={<CourseList></CourseList>}></Route>
          <Route path="/update-course/:courseId" element={<CourseUpdate></CourseUpdate>}></Route>
          <Route path='/student-course-list' element={<StudentCourseList/>}></Route>
          <Route path='/student-add' element={<StudentAddition></StudentAddition>}></Route>
          <Route path='/student-list' element={<StudentList></StudentList>}></Route>
          <Route path='/student-detail' element={<StudentDetail></StudentDetail>}></Route>
          <Route path='/student-update/:studentId' element={<StudentUpdate></StudentUpdate>}></Route>
          <Route path='/current-student' element={<StudentCurrent></StudentCurrent>}></Route>
          <Route path='/course-subscription/:courseId' element={<CourseSubscription setSubs={setSubs} subs={subs}></CourseSubscription>}></Route>
          <Route path='/course-subscription-list' element={<CourseSubscriptionList></CourseSubscriptionList>}></Route>
          <Route path='/course-subscriptions' element={<SubscriptionList></SubscriptionList>}></Route>
          <Route path='/subscription-update/:subscriptionId' element={<SubscriptionUpdate></SubscriptionUpdate>}></Route>
          <Route path='/current-Subscription' element={<CurrentSubscriptionList></CurrentSubscriptionList>}></Route>
          <Route path='/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/studentpaymentlist' element={<StudentPaymentList></StudentPaymentList>}></Route>
          <Route path='/paymentlist' element={<PaymentList></PaymentList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
