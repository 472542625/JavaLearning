package com.lt.aop.test;

import java.sql.SQLException;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class testaop1 {

	public testaop1() {

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

		testaop1 aop = (testaop1) context.getBean("testaop1");

		aop.test2();
	}

}
