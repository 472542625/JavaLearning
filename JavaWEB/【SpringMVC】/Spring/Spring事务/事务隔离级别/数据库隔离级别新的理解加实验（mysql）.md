##���ݿ���뼶��
#
##read uncommitted δ�ύ����select��������update���������������insert����������������
> ###��
> ####����
> �����Ƕ�ȡ��ʱ�򲻼�������˻�������������ڸ������ݵ�ʱ�������������ݽ��м����������������޸������ˣ�����û�жԱ��������˻�����insert����
  �ͻ���A��
  use test;
  set transaction isolation level read uncommitted;
  start transaction;
  update person set age = age - 1 where id = 1;�����ڿͻ���A�и������ݣ�
> �ͻ���B��
  use test;
  set transaction isolation level read uncommitted;
  start transaction;
  update person set age = age - 1 where id = 1;�����ڿͻ���B�и������ݣ�
  ��ʱ������Ϊ�м������������Ѿ���������B�в�������ͣ�ˣ�ֻ�ܵȵ�A�ͻ��˵�����commit�����������������
  ��ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction����ʱ��



������read committed �ύ��
�����Ƕ�ȡ��ʱ���������˲���������������ڸ������ݵ�ʱ�������������ݽ��м����������������޸������ˣ�����û�жԱ��������˻�����insert����
�ͻ���A��
use test;
set transaction isolation level read committed;
start transaction;
update person set age = age - 1 where id = 1;�����ڿͻ���A�и������ݣ�

�ͻ���B��
use test;
set transaction isolation level read committed;
start transaction;
update person set age = age - 1 where id = 1;�����ڿͻ���B�и������ݣ�
��ʱ������Ϊ�м������������Ѿ���������B�в�������ͣ�ˣ�ֻ�ܵȵ�A�ͻ��˵�����commit�����������������
��ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction����ʱ��

