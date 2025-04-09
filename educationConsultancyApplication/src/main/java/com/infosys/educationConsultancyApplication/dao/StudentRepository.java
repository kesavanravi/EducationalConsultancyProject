package com.infosys.educationConsultancyApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.infosys.educationConsultancyApplication.bean.Student;

public interface StudentRepository extends JpaRepository<Student,String>{
	@Query("select max(registrationNumber) from Student")
	public String getMaxregistrationNumber();

	
	@Query("select a from Student a where a.status='true'")
	public List<Student> getCurrentStudents();
	
	@Query("select status from Student where username=?1")
	public String  getStudentStatusByUsername(String username);
	
	@Query("select a from Student a where username=?1")
	public Student getStudentByUsername(String username);
}
