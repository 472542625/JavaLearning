-k��˼�ǵ�������Сд
pgsql2shp -f /home/tree -k -h localhost -p 5432 -u postgres -P 123456 llsss daxing_tree

��������ǵ���sql����е���
pgsql2shp -f /home/tree -h localhost -p 5432 -u postgres -P 123456 llsss  "select geom,urban,town,village,area,contractor,id,treespecies as treespecie,visitage,treeage,treeheight,grounddiameter as grounddiam,treearea,gp_id,recorder,x,y,maintenance from daxing_tree"


��������ǽ��������������
vim /etc/profile
�����
export PGCLIENTENCODING=GBK





