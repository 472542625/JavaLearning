package com.lt.aop.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lt.aop.dao.PeopleMapper;
import com.lt.aop.service.PeopleService;

// @Transactional(propagation = Propagation.REQUIRED, isolation =
// Isolation.DEFAULT)
@Service
public class PeopleServiceImpl implements PeopleService {

	// @Autowired
	// PeopleDao peopleDao;
	//
	// @Override
	// @Transactional(rollbackFor = { Exception.class })
	// public void transfer(int in, int out) {
	//
	// try {
	// peopleDao.in(50, in);
	// int i = 1 / 0;
	// peopleDao.out(50, out);
	// } catch (Exception e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// TransactionAspectSupport.currentTransactionStatus()
	// .setRollbackOnly();
	// }
	//
	// }
	@Autowired
	PeopleMapper peopleDao;

	@Override
	@Transactional(rollbackFor = { Exception.class })
	public void transfer(int money, int in, int out) throws Exception {

		HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("money", money);
		map.put("in", in);
		map.put("out", out);
		peopleDao.in(map);
		// int i = 1 / 0;
		throw new Exception();
		// peopleDao.out(map);

	}
}
