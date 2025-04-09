package com.infosys.educationConsultancyApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.infosys.educationConsultancyApplication.bean.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {
	@Query("select max(billNumber) from Payment")
	public String getMaxBillNumber();
	
	@Query("SELECT a FROM Payment a WHERE a.subscriptionId = ?1")
	public List<Payment> getBillBySubscriptionId(String subscriptionId);
	
	@Query("SELECT a FROM Payment a WHERE a.studentId = ?1")
	public List<Payment> getBillByStudentId(String studentId);
	
	@Query("select max(installmentNo) from Payment where subscriptionId=?1")
	public Integer getMaxInstallmentNumber(String subscriptionId);
}