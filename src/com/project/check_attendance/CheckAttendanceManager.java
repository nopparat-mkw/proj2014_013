package com.project.check_attendance;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.project.bean.ScheduleBean;
import com.project.bean.TermBean;
import com.project.utility.ConnectDB;

public class CheckAttendanceManager {

	public boolean addAttendance(ScheduleBean schedule, int Schedule_ID) throws SQLException {
		boolean chk = true;
		Connection dbConnection = null;
		PreparedStatement preparedStatement = null;
		String addSQL = "insert into attendance (statusActivity,schedule_ID,studentID) VALUES (?,?,?)";
		try {
			dbConnection = ConnectDB.getInstance().DBConnection();
			preparedStatement = dbConnection.prepareStatement(addSQL);
			preparedStatement.setString(1, schedule.getAttendance().getStatusActivity());
			preparedStatement.setInt(2, Schedule_ID);
			preparedStatement.setString(3, schedule.getAttendance().getStudent().getStudentID());
			preparedStatement.executeUpdate();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			chk = false;
		} finally {
			if (preparedStatement != null) {
				preparedStatement.close();
			}
			if (dbConnection != null) {
				dbConnection.close();
			}
		}
		return chk;
	}

	public boolean addSchedule(ScheduleBean schedule) throws SQLException {
		boolean chk = true;
		Connection dbConnection = null;
		PreparedStatement preparedStatement = null;
		String addSQL = "insert into schedule (dateAttendance,term) VALUES (?,?)";
		try {
			dbConnection = ConnectDB.getInstance().DBConnection();
			preparedStatement = dbConnection.prepareStatement(addSQL);
			java.sql.Date sqlCreateDate = new java.sql.Date(schedule.getDateAttendance().getTime());
			preparedStatement.setDate(1, sqlCreateDate);
			preparedStatement.setString(2, schedule.getTerm().getTermName());
			preparedStatement.executeUpdate();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			chk = false;
		} finally {
			if (preparedStatement != null) {
				preparedStatement.close();
			}
			if (dbConnection != null) {
				dbConnection.close();
			}
		}
		return chk;
	}

	public int findSchedule(Date date, TermBean termBean) throws SQLException {
		int Schedule_ID = 0;
		Connection dbConnection = null;
		PreparedStatement preparedStatement = null;
		String selectSQL = "select schedule_ID from schedule where dateAttendance = ? and term = ?";
		try {
			dbConnection = ConnectDB.getInstance().DBConnection();
			preparedStatement = dbConnection.prepareStatement(selectSQL);
			java.sql.Date sqlCreateDate = new java.sql.Date(date.getTime());
			preparedStatement.setDate(1, sqlCreateDate);
			preparedStatement.setString(2, termBean.getTermName());
			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				Schedule_ID = Integer.parseInt(rs.getString("schedule_ID"));
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			if (preparedStatement != null) {
				preparedStatement.close();
			}
			if (dbConnection != null) {
				dbConnection.close();
			}
		}
		return Schedule_ID;
	}

	public TermBean findTerm() throws SQLException {
		List<TermBean> listTerm = findAllTerm();
		TermBean termBean = new TermBean();

		for (int i = 0; i < listTerm.size(); i++) {
			System.out.println("startDate : " + listTerm.get(i).getStartDate() + " , endDate : " + listTerm.get(i).getEndDate());
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

			Date now = new Date();
			String currDt = sdf.format(now);

			if ((now.after(listTerm.get(i).getStartDate()) && (now.before(listTerm.get(i).getEndDate())))
					|| (currDt.equals(sdf.format(listTerm.get(i).getEndDate())) || currDt.equals(sdf.format(listTerm.get(i).getEndDate())))) {
				System.out.println(currDt + " = " + listTerm.get(i).getEndDate());
				System.out.println("เปิดเทอม");
				termBean.setTermName(listTerm.get(i).getTermName());

			} else {
				System.out.println(currDt + " != " + listTerm.get(i).getEndDate());
				System.out.println("ปิดเทอม");
			}
		}

		System.out.println("Term : " + termBean.getTermName());
		return termBean;
	}

	public List<TermBean> findAllTerm() throws SQLException {
		Connection dbConnection = null;
		PreparedStatement preparedStatement = null;
		String selectSQL = "SELECT * FROM term";
		List<TermBean> listAllTerm = new ArrayList<TermBean>();
		try {
			dbConnection = ConnectDB.getInstance().DBConnection();
			preparedStatement = dbConnection.prepareStatement(selectSQL);
			ResultSet rs = preparedStatement.executeQuery();

			while (rs.next()) {
				TermBean termBean = new TermBean();
				termBean.setTermName(rs.getString("termName"));
				termBean.setStartDate(rs.getDate("startDate"));
				termBean.setEndDate(rs.getDate("endDate"));
				listAllTerm.add(termBean);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			if (preparedStatement != null) {
				preparedStatement.close();
			}
			if (dbConnection != null) {
				dbConnection.close();
			}
		}
		return listAllTerm;
	}
}
