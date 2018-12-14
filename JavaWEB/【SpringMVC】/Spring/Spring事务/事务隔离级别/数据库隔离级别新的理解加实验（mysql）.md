# ���ݿ���뼶��

## read uncommitted δ�ύ��
> ### select  
>�����Ƕ�ȡ��ʱ�򲻼�������˻��������



> ### update  
> �������ݵ�ʱ�������������ݽ��м����������������޸�������
  �ͻ���A��  
  ���ڿͻ���A�и������� 
 ```mysql use test;
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1; 
 ```
> �ͻ���B��    
  ���ڿͻ���B�и�������  
>
 ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1;
  ```
> ��ʱ������Ϊ�м������������Ѿ���������B�в�������ͣ�ˣ�ֻ�ܵȵ�A�ͻ��˵�����commit�����������������  
  ��ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction����ʱ��  



> ### insert   
> û�жԱ��������˻�����insert���� �������������֮�䲻��Ӱ��
> �ͻ���A��  
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
>�ͻ���B��
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
> ����û��commit֮ǰ������insert������˴�֮�䲻��Ӱ�죬`�����ܶ�δcommit������`




## read committed �ύ��
> ### select 
>�����Ƕ�ȡ��ʱ���������˲����������
>A�ͻ���
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
>B�ͻ���
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
>����B�ж�ȡ��������Ȼ��11��û�з������   

> ### update  
>  ����read uncommitted��һ��������£������ݱ�����������ͬʱ����  
> �������ݵ�ʱ�������������ݽ��м����������������޸�������  
  �ͻ���A��  
  ���ڿͻ���A�и�������   
 ```mysql use test;
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1; 
 ```
> �ͻ���B��    
  ���ڿͻ���B�и�������  
>
 ```mysql use test;  
  set transaction isolation level read uncommitted;  
  start transaction;  
  update person set age = age - 1 where id = 1;
  ```
> ��ʱ������Ϊ�м������������Ѿ���������B�в�������ͣ�ˣ�ֻ�ܵȵ�A�ͻ��˵�����commit�����������������  
  ��ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction����ʱ��  
> ### insert   
>����û��commit֮ǰ������insert������˴�֮�䲻��Ӱ�죬`���ǲ��ܶ�δcommit������`  
   
   
   
 

## repeatable read �ظ���
> ### select 
>�����Ƕ�ȡ��ʱ���������˲����������
>A�ͻ���
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
>B�ͻ���
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
>����A�ͻ���commit���Ժ�Bδcommit֮ǰselect��ֵ����7��`������ظ������ݲ�һ�µ�����`  

> ### update   
>  ����read uncommitted��һ��������£������ݱ�����������ͬʱ����    
 
 
> ### insert   
>����û��commit֮ǰ������insert������˴�֮�䲻��Ӱ�죬`���ǲ��ܶ�δcommit������`    
>A�ͻ���  
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
>B�ͻ���  
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
   +----+------+����û�в鵽A����������ݣ������˻ö�
   ```
 
 
   
 
## serializable ���л�
> ### insert    
>A�ͻ���  
```mysql use test;
   set transaction isolation level serializable; 
   start transaction;    
   select * from person;
   ```
>B�ͻ���  
```mysql use test;
   set transaction isolation level serializable;  
   start transaction;     
   insert into person(age) values(301);������ס��
  
   ```
 
 
   
 
