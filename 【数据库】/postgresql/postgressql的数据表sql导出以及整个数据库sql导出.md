# Ŀ¼
��postgresql��binĿ¼�´�cmd������    
D:\Program Files\PostgreSQL\9.5\bin    


# ����bak�����ļ�   
windows���һ����ݿⱸ�ݣ�Ȼ������Ҫ��װ�ķ��������½����ݿ⣬�һ��ָ�������  


# ����sql��ʽ�ļ�
## �������ݿ���ָ�������ݱ�  
```mysql
pg_dump -h localhost -p 5432 -U postgres --column-inserts -t daxing_treespecies����������ݱ����ƣ� -f d://daxing_treespecies.sql postgis����������ݿ����ƣ�
```



## �����������ݿ⣨windows�����ô�ò��ɣ�windows���ñ��ݺ��ã�  
```mysql
pg_dump -h localhost -U postgres postgis   > d://sql�ļ���.sql
```


## �����������ݿ⣨��linux��������Գɹ���
��ִ��  psql -d ���ݿ��� -h ip��ַ -p ���ݿ�˿� -U �û��� -f �ļ���ַ��  
```mysql
psql -d ���ݿ����� -h localhost -p 5432 -U postgres -f sql�ļ���ַ  
```