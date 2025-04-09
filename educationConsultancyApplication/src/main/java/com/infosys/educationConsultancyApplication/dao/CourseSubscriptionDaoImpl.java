package com.infosys.educationConsultancyApplication.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.infosys.educationConsultancyApplication.bean.CourseSubscription;

@Service
@Repository
public class CourseSubscriptionDaoImpl implements CourseSubscriptionDao {

	@Autowired
	private CourseSubscriptionRepository repository;
	
	@Override
	public void save(CourseSubscription courseSubscription) {
		// TODO Auto-generated method stub
		repository.save(courseSubscription);
	}

	@Override
	public String generateSubscriptionId() {
		// TODO Auto-generated method stub
		Long id = 0L;
		String val = repository.getMaxId();
		if(val == null)
			id=100001L;
		else { 
			id=Long.parseLong(val.substring(2));
			id++;
		}
		String newId = "CS"+id;
		return newId;
	}

	@Override
	public CourseSubscription getSubscriptionById(String id) {
		// TODO Auto-generated method stub
		return repository.findById(id).get();
	}


	@Override
	public List<CourseSubscription> getAllCourseSubscriptions() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public List<CourseSubscription> getCurrentSubscriptions() {
		// TODO Auto-generated method stub
		return repository.getCurrentSubscriptions();
	}

	@Override
	public List<CourseSubscription> getAllSubscriptionsByStudent(String id) {
		// TODO Auto-generated method stub
		return repository.getAllSubscriptionsByStudentId(id);
	}

	@Override
	public String getStatusBySubscriptionId(String subscriptionId) {
		// TODO Auto-generated method stub
		return repository.getStatusBySubscriptionId(subscriptionId);
	}

	@Override
	public String getStatusByCourseIdStudentId(Long courseId, String studentId) {
		// TODO Auto-generated method stub
		return repository.getStatusByCourseIdStudentId(courseId,studentId);
	}
	
	
}