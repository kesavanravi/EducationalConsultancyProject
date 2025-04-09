import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubscriptionById,updateSubscription } from '../../Services/CourseSubscriptionService';
import { generateBillId, savePayment, getMaxInstallmentNumber } from '../../Services/PaymentService';


const Payment = () => {
    const [payment, setPayment] = useState({
        billNumber: '',
        subscriptionId: '',
        installmentNo: 0,
        amount: 0,
        payDate: ''
    });
    
    const [subInstallments,setSubInstallments] = useState(0);
    const [installment,setInstallment] = useState(0);
    const { id: subscriptionId } = useParams();
    const [billId, setBillId] = useState('');
    const navigate = useNavigate();
    const [subscription,setSubscription] = useState({
        subscriptionId: "",
        courseId: "",
        installments: 0,
        installmentAmount: 0,
        totalAmount: 0,
        subscriptionDate: "",
        status: ""
      });
    const getInstallmentNumber=()=>{
        getMaxInstallmentNumber(subscriptionId).then(response =>{
            setInstallment(response.data+1)
        })
    }
    useEffect(() => {
        getInstallmentNumber();
        generateBillId().then(response => {
            setBillId(response.data);
        });
        fetchSubscriptionDetails();
    }, []);

    const fetchSubscriptionDetails = () => {
        getSubscriptionById(subscriptionId).then(response => {
            setPayment(prev => ({
                ...prev,
                subscriptionId: subscriptionId,
                amount: response.data.installmentAmount,
                installmentNo:installment
            }))
            setSubscription(response.data)
            setSubInstallments(response.data.installments);
        });
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setPayment(prev => ({ ...prev, [name]: value }));
    };
    const handlePayment = (event) => {
        event.preventDefault();
        
        payment.installmentNo = installment;
        const finalPayment = { ...payment, billNumber: billId };
        if(payment.installmentNo === subInstallments){
            subscription.status = 'complete';
            
            updateSubscription(subscription).then(response =>{
                alert('All dues are cleared');
            }).catch(err => console.log(err))
        }
        
        savePayment(finalPayment).then(() => {
            alert(`Payment successful for installmentNo ${installment}`);
            navigate('/StudentMenu');
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Make Payment</h2>
                <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Bill Number:</label>
                        <input type="text" name="billNumber" value={billId} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Subscription ID:</label>
                        <input type="text" name="subscriptionId" value={subscriptionId} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Installment No:</label>
                        <input type="text" name="installmentNo" value={installment} readOnly  className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Amount:</label>
                        <input type="number" name="amount" value={payment.amount} readOnly className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Payment Date:</label>
                        <input type="date" name="payDate" value={payment.payDate} onChange={onChangeHandler} required className="w-full p-2 border rounded" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;