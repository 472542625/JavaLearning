# 目录
在postgresql的bin目录下打开cmd命令行    
D:\Program Files\PostgreSQL\9.5\bin    


# 导出bak备份文件   
windows就右击数据库备份，然后再需要安装的服务器上新建数据库，右击恢复就行了  


# 导出sql格式文件
## 导出数据库中指定的数据表  
```mysql
pg_dump -h localhost -p 5432 -U postgres --column-inserts -t daxing_treespecies（这个是数据表名称） -f d://daxing_treespecies.sql postgis（这个是数据库名称）
```



## 导出整个数据库（windows这个怎么用不成，windows上用备份好用）  
```mysql
pg_dump -h localhost -U postgres postgis   > d://sql文件名.sql
```


## 导入整个数据库（在linux上这个可以成功）
（执行  psql -d 数据库名 -h ip地址 -p 数据库端口 -U 用户名 -f 文件地址）  
```mysql
psql -d 数据库名称 -h localhost -p 5432 -U postgres -f sql文件地址  
```