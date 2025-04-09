package com.infosys.educationConsultancyApplication.dao;

import java.util.List;

import com.infosys.educationConsultancyApplication.bean.CourseSubscription;


public interface CourseSubscriptionDao {
	public void save(CourseSubscription courseSubscription);
	public CourseSubscription getSubscriptionById(String id);
	public List<CourseSubscription> getAllCourseSubscriptions();
	public List<CourseSubscription> getCurrentSubscriptions();
	public List<CourseSubscription> getAllSubscriptionsByStudent(String id);
	public String generateSubscriptionId();
	public String getStatusBySubscriptionId(String subscriptionId);
	public String getStatusByCourseIdStudentId(Long courseId,String studentId);
}