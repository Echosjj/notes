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


alert(a);
a();
var a= 3; 
function a(){
    alert(10)
};
alert(a);
a=6;
a();

var getName = function() {
    console.log(4);
  };
  function getName() {
    console.log(5);
  }
  getName();  //4

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
    var args = Array.prototype.slice.call(arguments, 1);
    var fNop = function() {};
    var fbound = function() {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }
    fNop.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound;
}








