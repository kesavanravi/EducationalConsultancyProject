import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { generateSubscriptionId,saveSubscription,getStatusByCourseIdStudentId } from '../../Services/CourseSubscriptionService';
import { useNavigate } from 'react-router-dom';
import { getStudentStatusByUsername } from '../../Services/StudentService';
import { displayCourseById } from '../../Services/CourseService';

const CourseSubscription = () => {
    const [subscription, setSubscription] = useState({
        subscriptionId: "",
        installments: 0,
        installmentAmount: 0,
        studentId: "",
        courseId: 0,
        endDate:"",
        subscriptionDate:"",
        status:"",
        totalAmount:0
      });
      const [totalAmount,setTotalAmount] = useState(0)
      const {courseId} = useParams();
      
      const [courseName,setCourseName] = useState("");
      const [newId, setNewId] = useState(0);
      let navigate = useNavigate();

      const showSubcriptionId = () => {
        generateSubscriptionId().then(response => {
          setNewId(response.data);
          // course.courseId=response.data;
        });
      }
      const [coursePrice,setCoursePrice] = useState(0)
      const showCourseAmount = () => {
        displayCourseById(courseId).then(response => {
          setCoursePrice(response.data?.price);
          setCourseName(response.data?.courseName)
          // course.courseId=response.data;
        });
      }
      useEffect(() => {
        checkStatus();
        showCourseAmount();
        checkSubscription();
      }, []);
      const onChangeHandler = (event) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        let updatedValue = value;
        
        if (name === "installments") {
            updatedValue = Math.max(0, Math.min(6, Number(value))); // Ensure range 0-6
            calculateInstallmentAmount(updatedValue);
        }
        
        setSubscription(prev => ({ ...prev, [name]: updatedValue }));
      };

      const calculateInstallmentAmount = (installments) => {
        if (installments > 1) {
            setTotalAmount(coursePrice * Math.pow(1.05, installments)); // 5% interest per month
            const installmentAmount = totalAmount / installments;
            setSubscription(prev => ({ ...prev, installmentAmount: installmentAmount.toFixed(2) }));
        } else {
            setSubscription(prev => ({ ...prev, installmentAmount: coursePrice }));
        }
    }
    
      const subscriptionSave = (event) => {
        
        event.preventDefault();
        subscription.subscriptionId = newId;
        subscription.courseId = courseId;
        subscription.totalAmount = totalAmount;
        // alert(""+course.courseId);
        saveSubscription(subscription).then(response => {
          alert("Student is subscribed to course");
          navigate('/StudentMenu');
        });
      }
    
      const checkStatus = () => {
        getStudentStatusByUsername().then(response => {
          if (response.data === false || 0) {
            alert("Student is not active");
            navigate("/StudentMenu");
          }
          else if(response.data === true){
            showSubcriptionId();
          }
          else{
            alert("Student is not registerd");
            navigate("/StudentMenu");
          }
        })
      }

      const checkSubscription =()=>{
        getStatusByCourseIdStudentId(courseId).then(response =>{
          if(response.data === 'complete' || response.data==='active' ||response.data=='expired'){
            alert("course Already registered....")
            navigate('/StudentMenu')
          }
        })
      }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Subscribe to Course</h2>
                <form onSubmit={subscriptionSave} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Subscription ID:</label>
                        <input type="text" name="subscriptionId" value={newId} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Course Name:</label>
                        <input type="text" name="courseId" value={courseName} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Subscription Date:</label>
                        <input type="Date" name="subscriptionDate" value={subscription.subscriptionDate} onChange={onChangeHandler} required className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Installments (1-6):</label>
                        <input type="number" name="installments" value={subscription.installments} onChange={onChangeHandler} min="1" max="6" required className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Installment Amount:</label>
                        <input type="text" name="installmentAmount" value={subscription.installmentAmount} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Total Amount after the installments:</label>
                        <input type="number" name="totalAmount" value={totalAmount} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Subscribe</button>
                </form>
            </div>
        </div>
  )
}

export default CourseSubscription