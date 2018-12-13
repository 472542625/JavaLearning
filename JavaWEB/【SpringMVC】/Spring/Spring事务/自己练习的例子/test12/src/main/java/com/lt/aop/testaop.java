package com.lt.aop;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.mchange.v2.c3p0.ComboPooledDataSource;

@Component
public class testaop {
	static Connection conn = null;

	public testaop() {

	}

	public void add(String name, int depid) throws SQLException {
		String sql = "insert into people(name,depid) values(?,?)";
		PreparedStatement prestate = conn.prepareStatement(sql);
		prestate.setString(1, name);
		prestate.setInt(2, depid);
		int reslut = prestate.executeUpdate();
		// throw new RuntimeException();
		// test.add("test", 1);

	}

	public void addservice() throws SQLException {
		testaop test = new testaop();

		test.add("test80", 1);

		int i = 1 / 0;
		test.add("test81", 1);

	}

	public void test1() {
		System.out.println("test1");
	}

	public void test2() {
		System.out.println("test2");
	}

	public static void main(String[] args) throws SQLException {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"classpath:/applicationContext.xml");
		ComboPooledDataSource comboPooledDataSourceID = (ComboPooledDataSource) context
				.getBean("comboPooledDataSourceID");
		testaop aop = (testaop) context.getBean("testaop");

		conn = comboPooledDataSourceID.getConnection();
		// System.out.println(conn);

		aop.test2();
	}

}
