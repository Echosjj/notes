function yideng(n, o){
    console.log(o);
    return {
        yideng: function(m) {
            return yideng(m, n);
        }
    }
}
const a=yideng(0); a.yideng(1); a.yideng(2); a.yideng(3);
const b=yideng(0).yideng(1).yideng(2).yideng(3);
const c=yideng(0).yideng(1); c.yideng(2); c.yideng(3);

// 解析：
/**
 * yideng函数返回一个 函数对象属性yideng， 这个属性返回一个函数，这个函数可以访问外部变量n；
 * 同时可以访问外部函数yideng； 所以可以重写成：
 * function yideng(n,o){
 *     console.log(o);
 *     return {
 *          _yideng_: function(m) {
 *              return yideng(m,n)
 *          }
 *     }
 * 
 * }
 * 第二行
 * 
 * 
 */



console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

/**
 * 解析
 * 宏任务： 所有的script代码，定时器： setTimeOut，setInterval, setImmediate
 * 微任务： promise， promise.then, process.nextTick
 * async, await 是promise的语法糖
 * 
 */


// alert(a);
// a();
// var a= 3;
// function a(){
//     alert(10)
// };
// alert(a);
// a=6;
// a();
//
// var getName = function() {
//     console.log(4);
//   };
//   function getName() {
//     console.log(5);
//   }
//   getName();  //4

/**
 * 解析：
 * 函数声明的提升大于变量提升
 * 
 */


/**
 * call、bind、apply的实现
 * 都能改变this指向、调用方法有不同:  fn.call(obj, arg1, arg2); fn.apply(obj, [arg1, arg2]); fn.bind(obj,[])
 * bind 返回原函数的拷贝
 */

Function.prototype.myCall = function(context) {
    var context = context || window;
    context.fn = this;
    var arags = [];
    arguments.forEach((item, index) => {
        if(index != 0) arags.push(item);
    })
    var result = eval('context.fn(' + arags + ')');
    delete context.fn
    return result;
}

Function.prototype.myApply = function(context, argsArr){
    var context = context || window;
    context.fn = this;
    var result = eval('context.fn(' + argsArr + ')');
    delete context.fn;
    return result;
}

Function.prototype.myBind = function(context){
    if(typeof this != 'function') {
        throw new Error('not a function');
    }
    var self = this;
    var fn = [].shift.call(arguments)
    var args = Array.prototype.slice.call(arguments);
    return function () {
        self.apply(fn, [].concat(args, Array.prototype.slice.call(arguments)));

    }
}

// 实现一个new
 function myNew() {
    const Fn = [].shift.call(arguments);
    const args = [].slice.call(arguments);
    const obj = Object.create(Fn.prototype);
    fn.apply(obj, args);
    return obj instanceof Object ? obj : {}
 }

 function myNew2() {
    const obj = {};
    const Fn = [].shift.call(arguments);
    const args = [].slice.call(arguments);
    obj._proto_ = Fn.prototype;
    fn.call(obj, args);
    return obj instanceof Object ? obj : {};
 }


 function Foo() {
    getName = function () {
        console.log('sjj')
    }
    return this
 }
  Foo.getName = function() {
    console.log('sjj1')
  }
  var getName  = function () {
      console.log('sjj2')
  }
   function  getName() {
    console.log('sjj3')

   }
   Foo.prototype.getName = function () {
       console.log('sjj4')
   }
   Foo.getName();
   getName();
   Foo().getName();
   getName();
   new Foo.getName();
   new Foo().getName();
   new new Foo().getName();



   // 创建对象的几种方式
// 寄生构造继承
function Person () {
    var o = new Object();
    o.name = 'sjj';
    o.getName = function () {
        console.log(this.name)
    };
    return o;
}

// 原型继承

// 原型链继承

// 构造函数继承


//promise
 function MyPromise(constructor) {
    this.state = pending;
    this.result = '';
    this.reason = '';
    function resolve(value) {
        if(this.state == pending){
            this.status = 'resolved';
            this.result = value;

        }

    };
    function rejecte(value) {
        this.reason = value;
        this.status = 'rejected'

    };
    try{
        constructor(resolve, rejecte)
    }catch(e){

    }

 }

 MyPromise.prototype.then = function(onResolved, onrejected){
    let self = this;
    switch (self.status) {
        case 'resolved':
            onResolved(self.result);
            break;
        case 'rejected':
            onrejected(self.reason);
            break;
    }

}


// var x=2;
// var y = {
//     x: 3,
//     z: (function(x){
//         this.x*=x;
//         x+=2;
//         return function (n) {
//             this.x*=x;
//             x+=3;
//             console.log(x)
//         }
//     })(x)
// }

//
// var x= 0;
// var y =1;
// function fn() {
//     x+=2;
//     fn = function (y) {
//         console.log(y + (--x));
//
//     }
//     console.log(x, y, '111');
// }
// fn(3);
// fn(4);


// 作用域与作用域链
// 作用域是函数执行上下文的抽象概念
// 作用域链 是函数执行上下文的集合


//es5 之后的执行上下文： 词法环境、变量环境、this、outer
// 绑定this， 创建词法环境组建，创建变量环境组建


// 原型和原型链

//继承


// eventLoop

//








