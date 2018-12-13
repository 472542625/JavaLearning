package com.lt.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import com.lt.proxy.service.service;
import com.lt.proxy.service.serviceimpl;

///重新手写的
public class jdkproxytest implements InvocationHandler {

	Object target;

	public jdkproxytest(Object obj) {
		this.target = obj;
	}

	@Override
	public Object invoke(Object proxy, Method method, Object[] args)
			throws Throwable {
		System.out.println("前置通知...");

		Object returenvalue = method.invoke(target, args);
		System.out.println("后置通知...");
		return returenvalue;

	}

	public static void main(String[] args) {

		service target = new serviceimpl();

		service proxy = (service) Proxy.newProxyInstance(target.getClass()
				.getClassLoader(), target.getClass().getInterfaces(),
				new jdkproxytest(target));
		proxy.index(1, 2);

	}
}
