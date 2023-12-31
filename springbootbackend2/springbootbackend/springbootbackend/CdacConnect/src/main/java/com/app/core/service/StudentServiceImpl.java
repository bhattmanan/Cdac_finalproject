package com.app.core.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.core.dao.IStudent;
import com.app.core.pojos.ExamStatus;
import com.app.core.pojos.ExternalMarks;
import com.app.core.pojos.InternalMarks;
import com.app.core.pojos.Student;
import com.app.core.pojos.StudentComplaints;
import com.app.core.pojos.StudentNotices;
import com.app.core.pojos.StudentOfTheMonth;



@Service
@Transactional
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private IStudent sdao;
	

	public StudentServiceImpl() {
		super();
	}

	@Override
	public Student validateStudentLogin(int studentPrn, String studentPassword) {
	
		return sdao.validateStudentLogin(studentPrn, studentPassword);
	}
	@Override
	public String validateStudentLogin1(int studentPrn, String studentPassword) {
	
		return "sdao.validateStudentLogin(studentPrn, studentPassword)";
	}

	@Override
	public Student validateSecurityQuestion(int studentPrn, String email, LocalDate dataOfBirth) {
		
		return sdao.validateSecurityQuestion(studentPrn, email, dataOfBirth);
	}

	@Override
	public Student insertStudentDetails(Student stud) {
		
		return sdao.insertStudentDetails(stud);
	}

	@Override
	public Student updateNewpassword(Student stud) {
		
		return sdao.updateNewpassword(stud);
	}

	@Override
	public List<StudentNotices> getListofNoticeActive() {
		
		return sdao.getListofNoticeActive();
	}

	@Override
	public Student getStudentDetails(int studentPrn) {
	
		return sdao.getStudentDetails(studentPrn);
	}

	@Override
	public List<StudentNotices> getStudentNotices() {
		
		return sdao.getStudentNotices() ;
	}

	@Override
	public List<StudentOfTheMonth> getStomDetails() {
		
		return sdao.getStomDetails() ;
	}

	@Override
	public StudentComplaints insertComplaints(StudentComplaints sc) {
		
		return sdao.insertComplaints(sc) ;
	}

	@Override
	public List<StudentComplaints> viewComplaints(int Studentprn) {
		
		return sdao.viewComplaints(Studentprn);
	}

	@Override
	public boolean removeComplaints(StudentComplaints scom) {
		   
		return sdao.removeComplaints(scom) ;
	}

	@Override
	public StudentComplaints getComplaint(int complaintId) {
		
		return sdao.getComplaint(complaintId);
	}

	@Override
	public StudentComplaints updateComplaint(StudentComplaints scomp) {
		
		return sdao.updateComplaint(scomp) ;
	}

	@Override
	public StudentNotices getNoticesDetails(int noticeId) {
				return sdao.getNoticesDetails(noticeId);
	}
	@Override
	public StudentComplaints getComplaintsDetails(int studentComplaintId) {
				return sdao.getComplaintsDetails(studentComplaintId);
	}

	@Override
	public List<StudentComplaints> getAllComplaints() {
		
		return sdao.getAllComplaints();
	}

	@Override
	public InternalMarks internalMarkData(InternalMarks internalmark) {
		
//		
//		//if(internalmark.getAssignmentMarks()>=24 && internalmark.getLabExamMarks()>=8)
//		  internalmark.setStudentStatus(ExamStatus.Passed);
//		else
//			internalmark.setStudentStatus(ExamStatus.Fail);
			return  sdao.internalMarkData(internalmark);
	}

	@Override
	public StudentNotices viewNotices(Integer noticeId) {
		// TODO Auto-generated method stub
		return sdao.getNoticesDetails(noticeId);
	}

	@Override
	public StudentComplaints updateStudentStatus(StudentComplaints sc) {
		
		return sdao.updateStudentStatus( sc);
	}

	@Override
	public StudentOfTheMonth getStom(Integer stomId) {
		
		return sdao.getStom(stomId);
	}

	@Override
	public StudentNotices removeNotice(StudentNotices studNot) {
		
		return sdao.removeNotice(studNot);
	}

	@Override
	public List<Student> getStudents() {
		
		return sdao.getStudents();
	}

	@Override
	public InternalMarks insertInternalMarks(InternalMarks inmark) {
		// TODO Auto-generated method stub
		return sdao.insertInternalMarks(inmark);
	}

	@Override
	public ExternalMarks insertExternalMarks(ExternalMarks ext) {
		
		return sdao.insertExternalMarks(ext);
	}
	
	@Override
	public List<InternalMarks> listInternalMarks(Student studentmarks) {
		
		return sdao.listInternalMarks(studentmarks);
	}

	@Override
	public List<ExternalMarks> listExternalMarks(Student studentmarks) {
		
		return sdao.listExternalMarks(studentmarks);
	}

	@Override
	public Student updateStudentDetails(Student stud) {
		
		return sdao.updateStudentDetails(stud);
	}


}
