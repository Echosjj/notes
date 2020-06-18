1.vue源码：
mvvm实现双向数据绑定的原理：
  利用数据劫持：通过Object.defineProperty()实现对数据劫持。
  实现一个observer，对数据进行getter， setter


2.vue自定义指令：

## nextTick 实现原理
* 利用js的执行机制； 