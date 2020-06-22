# es6

## object.create()、 new Object() 和 {} 有什么不同

```js
  var test1 = Object.create({x: 123, y: 21});
  console.log(test1._proto_.x); // 将对象继承到_proto_属性上
  var test2 = Object.create(null) // 创建一个空对象， 没有继承Object.prototype的属性和方法
```

## 实现关键字new
1. 创建一个空对象
2. 空对象执行_proto_链接
3. 改变 this 指向

```js
  function _new_(fn, arg){
      const obj = Object.create(fn.prototype);
      const ret = fn.apply(obj, arg);
      return ret instanceof Object ? ret : obj;
  }
```

## 原型链
* 任何对象都有_proto_属性,指向对象的原型对象： obj_proto_ ----> Object.prototype 
!['原型链图']('./images/prototype.jpeg')

## 继承
### 原型链继承
* 即 原型对象（obj.prototype）等于另一个类的实例
```js
function SuperType() {
    this.property = true;
}
SuperType.prototype.sayValue = function() {
    return this.property;
}
function SubType(){
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
    return this.subproperty;
};
var instance = new SubType();
alert(instance.getSuperValue());
```
#### 问题: 
* 最主要的问题来自包含引用类型值的原型，它会被所有实例共享
* 子类型不能向超类型传递参数
### 构造函数
* 子类型的构造函数内部调用
```js
function SuperType() {
    this.colors = ["red","blue","green"];
}
​
function SubType(){
    //借调了超类型的构造函数
    SuperType.call(this);
}
​
var instance1 = new SubType();
//["red","blue","green","black"]
instance1.colors.push("black");
console.log(instance1.colors);
​
var instance2 = new SubType();
//["red","blue","green"]
console.log(instance2.colors);

}
```
#### 问题：
* 方法都在构造函数中定义，函数无法复用
* 在超类型中定义的方法，子类型不可见，结果所有类型都只能使用构造函数模式


