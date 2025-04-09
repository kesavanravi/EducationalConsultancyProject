import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubscriptionById, updateSubscription } from '../../Services/CourseSubscriptionService';

const SubscriptionUpdate = () => {
  const { subscriptionId } = useParams();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState({
    subscriptionId: "",
    courseId: "",
    installments: 0,
    installmentAmount: 0,
    totalAmount: 0,
    subscriptionDate: "",
    status: ""
  });

  // Fetch subscription details on first render
  useEffect(() => {
    getSubscriptionById(subscriptionId).then(response => {
      setSubscription(response.data);
    }).catch(error => {
      console.error("Error fetching subscription:", error);
    });
  }, [subscriptionId]);

  // Handle status change
  const handleStatusChange = (event) => {
    setSubscription({ ...subscription, status: event.target.value });
  };

  // Handle update
  const handleUpdate = () => {
    updateSubscription(subscription).then(() => {
      alert("Subscription updated successfully!");
      navigate(-1); // Navigate to previous page
    }).catch(error => {
      console.error("Error updating subscription:", error);
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Update Subscription</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">Subscription ID:</label>
          <input type="text" value={subscription.subscriptionId} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Course ID:</label>
          <input type="text" value={subscription.courseId} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Student ID:</label>
          <input type="text" value={subscription.studentId} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Installments:</label>
          <input type="number" value={subscription.installments} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Installment Amount (₹):</label>
          <input type="text" value={subscription.installmentAmount} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Total Amount (₹):</label>
          <input type="text" value={subscription.totalAmount} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Subscription Date:</label>
          <input type="text" value={subscription.subscriptionDate} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">end Date:</label>
          <input type="text" value={subscription.endDate} readOnly className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
          <label className="block text-gray-600">Status:</label>
          <select value={subscription.status} onChange={handleStatusChange} className="w-full px-3 py-2 border rounded">
            <option value="expired">Expired</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="button" onClick={handleUpdate} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Update Subscription
        </button>
      </form>
    </div>
  );
};

export default SubscriptionUpdate;