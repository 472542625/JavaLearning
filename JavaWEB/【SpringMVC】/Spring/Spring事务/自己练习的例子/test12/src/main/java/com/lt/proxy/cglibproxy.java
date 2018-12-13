package com.lt.proxy;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import com.lt.proxy.service.serviceimpl;

public class cglibproxy implements MethodInterceptor {

	@Override
	public Object intercept(Object obj, Method method, Object[] args,
			MethodProxy methodProxy) throws Throwable {
		System.out.println("before");
		Object o1 = methodProxy.invokeSuper(obj, args);
		System.out.println("end");
		return o1;

	}

	public static void main(String[] args) {

		cglibproxy proxy = new cglibproxy();

		Enhancer enhancer = new Enhancer();
		enhancer.setSuperclass(serviceimpl.class);
		enhancer.setCallback(proxy);
		serviceimpl s = (serviceimpl) enhancer.create();
		s.index(1, 2);

	}

}
