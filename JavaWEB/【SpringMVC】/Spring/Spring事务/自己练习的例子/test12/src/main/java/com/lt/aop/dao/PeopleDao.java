package com.lt.aop.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PeopleDao {

	@Autowired
	private DataSource dataSource;

	// public void setDatasource(ComboPooledDataSource datasource) {
	// this.datasource = datasource;
	// }

	public void out(int money, int outid) throws Exception {

		Connection conn = dataSource.getConnection();

		PreparedStatement preStatement = conn
				.prepareStatement("update people set money = money - ? where id = ?");
		preStatement.setInt(1, money);
		preStatement.setInt(2, outid);
		preStatement.executeUpdate();

		if (conn != null) {

			conn.close();
		}
		if (preStatement != null) {

			preStatement.close();
		}

	}

	public void in(int money, int inid) throws Exception {

		Connection conn = dataSource.getConnection();

		PreparedStatement preStatement = conn
				.prepareStatement("update people set money = money + ? where id = ?");
		preStatement.setInt(1, money);
		preStatement.setInt(2, inid);
		preStatement.executeUpdate();

		if (conn != null) {

			conn.close();
		}
		if (preStatement != null) {

			preStatement.close();
		}

	}

	// public DataSource getDataSource() {
	// return dataSource;
	// }
	//
	// public void setDataSource(DataSource dataSource) {
	// this.dataSource = dataSource;
	// }

	// public void addPeople() throws SQLException {
	//
	// Connection conn = jdbcutil.getConnection();
	// System.out.println(conn);
	// PreparedStatement preparedStatement = conn
	// .prepareStatement("insert into people(name,depid) values(?,?)");
	// preparedStatement.setString(1, "test");
	// preparedStatement.setInt(2, 1);
	// preparedStatement.executeUpdate();
	//
	// }
	//
	// public void updatesub(int money, int id) throws SQLException {
	// Connection conn = jdbcutil.getConnection();
	// PreparedStatement preparedStatement = conn
	// .prepareStatement("update people set money = money - ? where id = ?");
	// preparedStatement.setInt(1, money);
	// preparedStatement.setInt(2, id);
	// preparedStatement.executeUpdate();
	// }
	//
	// public void updateadd() throws SQLException {
	// Connection conn = jdbcutil.getConnection();
	// PreparedStatement preparedStatement1 = conn
	// .prepareStatement("update people set money = money + ? where id = ?");
	// preparedStatement1.setInt(1, 100);
	// preparedStatement1.setInt(2, 32);
	// preparedStatement1.executeUpdate();
	// int i = 1 / 0;
	// PreparedStatement preparedStatement2 = conn
	// .prepareStatement("update people set money = money - ? where id = ?");
	// preparedStatement2.setInt(1, 100);
	// preparedStatement2.setInt(2, 33);
	// preparedStatement2.executeUpdate();
	// }
	//
	// public static void main(String[] args) throws SQLException {
	// ApplicationContext context = new ClassPathXmlApplicationContext(
	// "classpath:/applicationContext.xml");
	// PeopleDao dao = (PeopleDao) context.getBean("PeopleDao");
	//
	// dao.updateadd();
	// }

}
