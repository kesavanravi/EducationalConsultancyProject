package com.infosys.educationConsultancyApplication.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Payment {
	public Payment(String billNumber, String subscriptionId, String studentId, String installmentNo, Integer amount,
			String payDate) {
		super();
		this.billNumber = billNumber;
		this.subscriptionId = subscriptionId;
		this.studentId = studentId;
		this.installmentNo = installmentNo;
		this.amount = amount;
		this.payDate = payDate;
	}
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	private String billNumber;
	private String subscriptionId;
	private String studentId;
	private String installmentNo;
	private Integer amount;
	private String payDate;
	public String getBillNumber() {
		return billNumber;
	}
	public void setBillNumber(String billNumber) {
		this.billNumber = billNumber;
	}
	public String getSubscriptionId() {
		return subscriptionId;
	}
	public void setSubscriptionId(String subscriptionId) {
		this.subscriptionId = subscriptionId;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getInstallmentNo() {
		return installmentNo;
	}
	public void setInstallmentNo(String installmentNo) {
		this.installmentNo = installmentNo;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public String getPayDate() {
		return payDate;
	}
	public void setPayDate(String payDate) {
		this.payDate = payDate;
	}
	@Override
	public String toString() {
		return "Payment [billNumber=" + billNumber + ", subscriptionId=" + subscriptionId + ", studentId=" + studentId
				+ ", installmentNo=" + installmentNo + ", amount=" + amount + ", payDate=" + payDate + "]";
	}
}
