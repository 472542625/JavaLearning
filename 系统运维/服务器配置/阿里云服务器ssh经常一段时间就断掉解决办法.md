�����Ʒ�����ssh����һ��ʱ��Ͷϵ�����취  
#vim /etc/ssh/sshd_config  

�ҵ���������  

#ClientAliveInterval 0  
#ClientAliveCountMax 3  

ȥ��ע�ͣ��ĳ�  

ClientAliveInterval 30  
ClientAliveCountMax 64800  
 
�����е���˼�ֱ���  

1���ͻ���ÿ���������������һ����������  

2���ͻ��˶�����û����Ӧ���������Զ��ϵ�����  

����sshd����  

service sshd restart  
 