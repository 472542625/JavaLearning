package com.lt;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lt.aop.service.PeopleService;

/**
 * Hello world!
 * 
 */
public class App {

	public static void main(String[] args) throws Exception {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"classpath:/applicationContext.xml");

		PeopleService service = (PeopleService) context
				.getBean("peopleServiceImpl");

		service.transfer(50, 34, 33);
	}
}
