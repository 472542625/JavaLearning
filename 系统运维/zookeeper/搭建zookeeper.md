https://github.com/Snailclimb/springboot-integration-examples/blob/master/md/springboot-dubbo.md
������������ڵ�zookeeper
����zookeeperĿ¼������data�ļ��С�
mkdir data
����/zookeeper/confĿ¼�£�����zoo_sample.cfg������Ϊzoo.cfg
cp zoo_sample.cfg zoo.cfg

vim zoo.cfg
dataDir=/usr/local/zookeeper/data

./zkServer.sh start