package com.app.core.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.core.dao.ICoordinator;
import com.app.core.pojos.CourseCoordinator;
import com.app.core.pojos.Coursecoordinatorcomplaints;
import com.app.core.pojos.StudentNotices;
import com.app.core.pojos.StudentOfTheMonth;


@Service
@Transactional
public class CoordinatorService implements ICoordinatorService {

	
	@Autowired
	private ICoordinator cdao;
	
	
	public CoordinatorService() {
		super();
	}

	@Override
	public CourseCoordinator ValidateLogin(int courseId, String password) {
		
		return cdao.ValidateLogin(courseId, password);
	}

	@Override
	public CourseCoordinator validateSecurityQustion(int courseId, String email, LocalDate dataOfBirth) {
		
		return cdao.validateSecurityQustion(courseId, email, dataOfBirth);
	}

	@Override
	public CourseCoordinator updateNewpassword(CourseCoordinator cord) {
		
		return cdao.updateNewpassword(cord);
	}

	@Override
	public StudentNotices insertNotice(StudentNotices notices) {
		
		return cdao.insertNotice(notices) ;
	}

	@Override
	public Coursecoordinatorcomplaints insertReplyComplaint(Coursecoordinatorcomplaints complaints) {
		
		return cdao.insertReplyComplaint(complaints);
	}

	@Override
	public Coursecoordinatorcomplaints viewComplaint(int complaintId) {
		
		return null;
	}

	@Override
	public CourseCoordinator getCoordintorDetails(int courseId) {
		// TODO Auto-generated method stub
		return cdao.getCoordintorDetails(courseId) ;
	}

	@Override
	public StudentOfTheMonth insertStomDetails(StudentOfTheMonth stom) {
		
		return cdao.insertStomDetails(stom);
	}

	@Override
	public StudentNotices updateNotice(StudentNotices notices) {
		// TODO Auto-generated method stub
		return cdao.updateNotice(notices);
	}

	@Override
	public StudentOfTheMonth updateStomDetails(StudentOfTheMonth studmonth) {
		// TODO Auto-generated method stub
		return cdao.updateStomDetails(studmonth);
	}

}
