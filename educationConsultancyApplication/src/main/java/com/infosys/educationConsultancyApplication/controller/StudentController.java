package com.infosys.educationConsultancyApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.educationConsultancyApplication.bean.Course;
import com.infosys.educationConsultancyApplication.bean.Student;
import com.infosys.educationConsultancyApplication.dao.StudentDao;
import com.infosys.educationConsultancyApplication.service.EduconUserService;

@RestController
@RequestMapping("/edu-con/")
@CrossOrigin(origins = "http://localhost:3636")
public class StudentController {
	@Autowired
	private StudentDao StudentDao;
	
	@Autowired
	private EduconUserService service;
	
	@PostMapping("/student")
	public void saveStudent(@RequestBody Student student) {
		String username = service.getUserId();
		String email = service.getEmail();
		student.setUsername(username);
		student.setEmail(email);
		student.setStatus("true");
		StudentDao.save(student);
	}
	
	@PutMapping("/student")
	public void updateStudent(@RequestBody Student student) {
		StudentDao.save(student);
	}
	
	@GetMapping("/student/{id}")
	public Student getStudentById(@PathVariable String id){
		return StudentDao.getStudentById(id);
	}
	
	@GetMapping("/student")
	public List<Student> getAllStudents(){
		return StudentDao.getAllStudents();
	}
	
	@GetMapping("/student-id")
	public String generateRegistration() {
		return StudentDao.generateRegistration();
	}
	
	@GetMapping("/student-other")
	public List<Student> getCurrentStudents(){
		return StudentDao.getCurrentStudents();
	}
	
	@GetMapping("/student-status")
	public String getStudentStatusByUsername() {
		String username = service.getUserId();
		return StudentDao.getStudentStatusByUsername(username);
	}
	
	@GetMapping("/student-me")
	public Student getStudentDetail() {
		String username = service.getUserId();
		return StudentDao.getStudentByUsername(username);
	}
}