import React, { useState, useEffect } from 'react';
import { getAllBills } from '../../Services/PaymentService';
import { useNavigate } from 'react-router-dom';


const PaymentList = () => {
    const [payments, setPayments] = useState([]);
    const navigate = useNavigate();
    const showPayments = () => {
        getAllBills().then(res => {
            setPayments(res.data);
        });
    };

    useEffect(() => {
        showPayments();
    }, []);

    const returnBack = () => {
        navigate('/AdminMenu');
    };

    return (
        <div className="text-center">
            <h2 className="text-center">Payment List</h2>
            <hr style={{ height: "3px", borderWidth: 0, color: "yellow", backgroundColor: "red" }} />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Bill Number</th>
                            <th>Subscription ID</th>
                            <th>Student ID</th>
                            <th>Installment No</th>
                            <th>Amount</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment.billNumber}>
                                <td>{payment.billNumber}</td>
                                <td>{payment.subscriptionId}</td>
                                <td>{payment.studentId}</td>
                                <td>{payment.installmentNo}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.payDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <button style={{ marginLeft: "10px" }} onClick={returnBack} className="btn btn-success">Return</button>
            </div>
        </div>
    );
};

export default PaymentList