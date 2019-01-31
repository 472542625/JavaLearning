https://github.com/Snailclimb/springboot-integration-examples/blob/master/md/springboot-dubbo.md
····搭建单节点zookeeper
进入zookeeper目录，创建data文件夹。
mkdir data
进入/zookeeper/conf目录下，复制zoo_sample.cfg，命名为zoo.cfg
cp zoo_sample.cfg zoo.cfg

vim zoo.cfg
dataDir=/usr/local/zookeeper/data

./zkServer.sh start