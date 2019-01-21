-k意思是导出名称小写
pgsql2shp -f /home/tree -k -h localhost -p 5432 -u postgres -P 123456 llsss daxing_tree

下面这个是导出sql语句中的列
pgsql2shp -f /home/tree -h localhost -p 5432 -u postgres -P 123456 llsss  "select geom,urban,town,village,area,contractor,id,treespecies as treespecie,visitage,treeage,treeheight,grounddiameter as grounddiam,treearea,gp_id,recorder,x,y,maintenance from daxing_tree"


下面这个是解决导出中文乱码
vim /etc/profile
里面加
export PGCLIENTENCODING=GBK





