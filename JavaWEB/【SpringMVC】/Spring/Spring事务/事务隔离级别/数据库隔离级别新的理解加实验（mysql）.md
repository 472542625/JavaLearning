# 数据库隔离级别

## read uncommitted 未提交读（select不加锁，update会加锁（行锁），insert不加锁（表锁））
> ### select  
>这种是读取的时候不加锁，因此会有脏读，



> ### update  
> 更新数据的时候会对所有行数据进行加锁，其他事务不能修改数据了，但是没有对表加锁，因此还可以insert数据  
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
> ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1;
  ```
> 此时发现因为行级锁，行数据已经被锁定，B中操作被暂停了，只能等到A客户端的事务commit后才能正常继续更新  
  （ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction）超时了  



> ### insert   
>  添加数据事务之间不受影响



## read uncommitted 未提交读（select不加锁，update会加锁（行锁），insert不加锁（表锁））
> ### select  
>这种是读取的时候不加锁，因此会有脏读，



> ### update  
> 更新数据的时候会对所有行数据进行加锁，其他事务不能修改数据了，但是没有对表加锁，因此还可以insert数据  
  客户端A：  
  先在客户端A中更新数据 
 ```mysql use test;
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1; 
 ```
> 客户端B：  
  再在客户端B中更新数据  
  ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1;
  ```
  此时发现因为行级锁，行数据已经被锁定，B中操作被暂停了，只能等到A客户端的事务commit后才能正常继续更新  
  （ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction）超时了  



> ### insert   
   添加数据事务之间不受影响
   
   
   
   
···read committed 提交读
这种是读取的时候加锁，因此不会有脏读，但是在更新数据的时候会对所有行数据进行加锁，其他事务不能修改数据了，但是没有对表加锁，因此还可以insert数据
客户端A：
use test;
set transaction isolation level read committed;
start transaction;
update person set age = age - 1 where id = 1;（先在客户端A中更新数据）

客户端B：
use test;
set transaction isolation level read committed;
start transaction;
update person set age = age - 1 where id = 1;（再在客户端B中更新数据）
此时发现因为行级锁，行数据已经被锁定，B中操作被暂停了，只能等到A客户端的事务commit后才能正常继续更新
（ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction）超时了

