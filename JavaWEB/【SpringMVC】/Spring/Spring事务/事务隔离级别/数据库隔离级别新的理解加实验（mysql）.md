# 数据库隔离级别

## read uncommitted 未提交读
> ### select  
>这种是读取的时候不加锁，因此会有脏读，



> ### update  
> 更新数据的时候会对所有行数据进行加锁，其他事务不能修改数据了
  客户端A：  
  先在客户端A中更新数据 
 ```mysql use test;
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1; 
 ```
> 客户端B：    
  再在客户端B中更新数据  
>
 ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1;
  ```
> 此时发现因为行级锁，行数据已经被锁定，B中操作被暂停了，只能等到A客户端的事务commit后才能正常继续更新  
  （ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction）超时了  



> ### insert   
> 没有对表加锁，因此还可以insert数据 ，添加数据事务之间不受影响
> 客户端A中  
 ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  insert into person(age) values(201);
  select * from person;
  +----+------+
  | id | age  |
  +----+------+
  |  1 |   11 |
  |  2 |   99 |
  |  3 |  100 |
  |  4 |  101 |
  |  5 |  102 |
  |  7 |  200 |
  |  9 |  201 |
  +----+------+
  
  
  ```
>客户端B中
 ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  insert into person(age) values(202);
  select * from person;
  +----+------+
  | id | age  |
  +----+------+
  |  1 |   11 |
  |  2 |   99 |
  |  3 |  100 |
  |  4 |  101 |
  |  5 |  102 |
  |  7 |  200 |
  |  9 |  201 |
  +----+------+
     
  ```
> 发现没有commit之前均可以insert，事务彼此之间不受影响，`而且能读未commit的数据`




## read committed 提交读
> ### select 
>这种是读取的时候加锁，因此不会有脏读，
>A客户端
 ```mysql use test;
  set transaction isolation level read committed; 
  start transaction;
  mysql> select * from person;
  +----+------+
  | id | age  |
  +----+------+
  |  1 |   11 |
  |  2 |   99 |
  |  3 |  100 |
  |  4 |  101 |
  |  5 |  102 |
  |  7 |  200 |
  |  8 |  201 |
  |  9 |  201 |
  +----+------+
  update person set age = age - 1 where id = 1; 
   mysql> select * from person;
    +----+------+
    | id | age  |
    +----+------+
    |  1 |   10 |
    |  2 |   99 |
    |  3 |  100 |
    |  4 |  101 |
    |  5 |  102 |
    |  7 |  200 |
    |  8 |  201 |
    |  9 |  201 |
    +----+------+
 ```
>B客户端
 ```mysql use test;
  set transaction isolation level read committed; 
  start transaction;  
  mysql> select * from person;
    +----+------+
    | id | age  |
    +----+------+
    |  1 |   11 |
    |  2 |   99 |
    |  3 |  100 |
    |  4 |  101 |
    |  5 |  102 |
    |  7 |  200 |
    |  8 |  201 |
    |  9 |  201 |
    +----+------+
   
 ```
>发现B中读取的数据仍然是11，没有发生脏读   

> ### update  
>  类似read uncommitted，一个事务更新，行数据被锁，不能再同时更新  
> 更新数据的时候会对所有行数据进行加锁，其他事务不能修改数据了  
  客户端A：  
  先在客户端A中更新数据   
 ```mysql use test;
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1; 
 ```
> 客户端B：    
  再在客户端B中更新数据  
>
 ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1;
  ```
> 此时发现因为行级锁，行数据已经被锁定，B中操作被暂停了，只能等到A客户端的事务commit后才能正常继续更新  
  （ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction）超时了  
> ### insert   
>发现没有commit之前均可以insert，事务彼此之间不受影响，`但是不能读未commit的数据`  
   
   
   
 

## repeatable read 重复读
> ### select 
>这种是读取的时候加锁，因此不会有脏读，
>A客户端
 ```mysql use test;
  set transaction isolation level repeatable read; 
  start transaction;
  mysql> select * from person;
  +----+------+
  | id | age  |
  +----+------+
  |  1 |    7 |
  |  2 |   99 |
  |  3 |  100 |
  |  4 |  101 |
  |  5 |  102 |
  |  7 |  200 |
  |  8 |  201 |
  |  9 |  201 |
  | 10 |  203 |
  | 11 |  203 |
  | 12 |  204 |
  +----+------+
  update person set age = age - 1 where id = 1; 
   mysql> select * from person;
   +----+------+
   | id | age  |
   +----+------+
   |  1 |    6 |
   |  2 |   99 |
   |  3 |  100 |
   |  4 |  101 |
   |  5 |  102 |
   |  7 |  200 |
   |  8 |  201 |
   |  9 |  201 |
   | 10 |  203 |
   | 11 |  203 |
   | 12 |  204 |
   +----+------+
  commit;
 ```
>B客户端
 ```mysql use test;
  set transaction isolation level repeatable read; 
  start transaction;  
  mysql> select * from person;
   +----+------+
   | id | age  |
   +----+------+
   |  1 |    7 |
   |  2 |   99 |
   |  3 |  100 |
   |  4 |  101 |
   |  5 |  102 |
   |  7 |  200 |
   |  8 |  201 |
   |  9 |  201 |
   | 10 |  203 |
   | 11 |  203 |
   | 12 |  204 |
   +----+------+
   
 ```
>发现A客户端commit了以后，B未commit之前select的值还是7，`解决了重复读数据不一致的问题`  

> ### update   
>  类似read uncommitted，一个事务更新，行数据被锁，不能再同时更新    
 
 
> ### insert   
>发现没有commit之前均可以insert，事务彼此之间不受影响，`但是不能读未commit的数据`    
>A客户端  
```mysql use test;
   set transaction isolation level repeatable read; 
   start transaction;    
    select * from person;
    +----+------+
    | id | age  |
    +----+------+
    |  1 |    6 |
    |  2 |   99 |
    |  3 |  100 |
    |  4 |  101 |
    |  5 |  102 |
    |  7 |  200 |
    |  8 |  201 |
    |  9 |  201 |
    | 10 |  203 |
    | 11 |  203 |
    | 12 |  204 |
    +----+------+
   insert into person(age) values(300);
   commit;
   ```
>B客户端  
```mysql use test;
   set transaction isolation level repeatable read;  
   start transaction;     
   select * from person;  
   +----+------+
   | id | age  |
   +----+------+
   |  1 |    6 |
   |  2 |   99 |
   |  3 |  100 |
   |  4 |  101 |
   |  5 |  102 |
   |  7 |  200 |
   |  8 |  201 |
   |  9 |  201 |
   | 10 |  203 |
   | 11 |  203 |
   | 12 |  204 |
   +----+------+发现没有查到A插入的新数据，发生了幻读
   ```
 
 
   
 
## serializable 串行化
> ### insert    
>A客户端  
```mysql use test;
   set transaction isolation level serializable; 
   start transaction;    
   select * from person;
   ```
>B客户端  
```mysql use test;
   set transaction isolation level serializable;  
   start transaction;     
   insert into person(age) values(301);发现锁住了
  
   ```
 
 
   
 
