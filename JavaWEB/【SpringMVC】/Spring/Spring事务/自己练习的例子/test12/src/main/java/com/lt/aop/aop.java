package com.lt.aop;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class aop {

	@Before("execution(* com.lt.aop.*.*(..))")
	public void before() {

		System.out.println("testaop的before");
	}

	@Before("execution(* com.lt.aop.test.*.*(..))")
	public void before1() {

		System.out.println("testaop1的before");
	}

	@Before("execution(* com.lt.aop.service.*.*(..))")
	public void PeopleServiceImplbefore() {

		System.out.println("PeopleServiceImpl------before");
	}

	@After("execution(* com.lt.aop.*.*(..))")
	public void after() {

		System.out.println("after");
	}

}
