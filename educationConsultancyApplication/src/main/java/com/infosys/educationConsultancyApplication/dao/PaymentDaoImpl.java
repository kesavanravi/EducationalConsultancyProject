package com.infosys.educationConsultancyApplication.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.infosys.educationConsultancyApplication.bean.Payment;

@Service
@Repository
public class PaymentDaoImpl implements PaymentDao {

	@Autowired
	private PaymentRepository repository;
	
	@Override
	public void save(Payment payment) {
		// TODO Auto-generated method stub
		repository.save(payment);
	}

	@Override
	public Payment getPaymentByBill(String billNumber) {
		// TODO Auto-generated method stub
		return repository.findById(billNumber).get();
	}

	@Override
	public List<Payment> getAllBills() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public List<Payment> getBillBySubscriptionId(String subscriptionId) {
		// TODO Auto-generated method stub
		return repository.getBillBySubscriptionId(subscriptionId);
	}

	@Override
	public List<Payment> getBillByStudentId(String studentId) {
		// TODO Auto-generated method stub
		return repository.getBillByStudentId(studentId);
	}

	@Override
	public String generateBillNumber() {
		// TODO Auto-generated method stub
		Long id=0L;
		String val = repository.getMaxBillNumber();
		if(val==null)
			id=1000001L;
		else {
			id = Long.parseLong(val.substring(2));
			id++;
		}
		String newId = "BL"+id;
		return newId;
	}

	@Override
	public Integer getMaxInstallmentNumber(String subscriptionId) {
		// TODO Auto-generated method stub
		Integer val = repository.getMaxInstallmentNumber(subscriptionId);
		if(val == null)
			val = 0;
		return val;
	}

}