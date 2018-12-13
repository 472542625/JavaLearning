package com.lt.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import com.lt.proxy.service.service;
import com.lt.proxy.service.serviceimpl;

public class jdkproxy implements InvocationHandler {

	Object target;

	public jdkproxy(Object obj) {
		this.target = obj;
		// return Proxy.newProxyInstance(obj.getClass().getClassLoader(), obj
		// .getClass().getInterfaces(), this);
	}

	@Override
	public Object invoke(Object proxy, Method method, Object[] args)
			throws Throwable {

		System.out.println("index.....begin方法名" + method.getName());
		System.out.println("类名" + target.getClass().getName());

		for (Object object : args) {
			System.out.println("调用参数" + object.toString());
		}

		Object returnval = method.invoke(target, args);
		System.out.println("index.....end");
		System.out.println("index.....end" + returnval);
		return returnval;
	}

	public static void main(String[] args) {
		service serviceimpl = new serviceimpl();

		jdkproxy handler = new jdkproxy(serviceimpl);
		service proxy = (service) Proxy.newProxyInstance(serviceimpl.getClass()
				.getClassLoader(), serviceimpl.getClass().getInterfaces(),
				handler);

		// System.out.println(proxy.getClass().getName());
		proxy.index(1, 2);

	}
}
