



# thymeleaf   

## 路径问题  
```html
 <div th:replace="index/header :: header"></div>  
 <head th:include="index/common-layui-js-css :: div"></head>  
 上面这个路径index前面切记不加/，因为在IDEA中调试的时候正常，但是打成jar包后运行正常，报出解析thymeleaf失败  
```

## include和replace详解

 [https://blog.csdn.net/austral/article/details/73802396](https://blog.csdn.net/austral/article/details/73802396)    