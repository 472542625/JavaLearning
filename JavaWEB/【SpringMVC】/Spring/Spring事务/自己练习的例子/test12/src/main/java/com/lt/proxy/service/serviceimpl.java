package com.lt.proxy.service;

public class serviceimpl implements service {

	@Override
	public String index(int a, int b) {
		System.out.println("index" + a);
		return "index"+a;
	}
}
