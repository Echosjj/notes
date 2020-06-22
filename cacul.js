/**
 * 面试经典算法
 * */

// 冒泡算法的实现
// 1. 第一轮 轮询； 轮询 n-1轮
// 2。第一轮轮询从 0 开始， 进行 n-2次
// 调换比较后的顺序

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len -1; i++) {
        for (var j = 0; j < len - i -1; j++) {
            if( arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
var a = [5,1,2,7,8,0,3];
console.log(bubbleSort(a));


// 快速排序
// 设置递归出口
// 从中间取一个值，大于这个值的放右边，小于这个值的放在左边
// 从去除中间值得到的新数组开始轮询

function quickSort(arr) {
    if (arr.length <= 1){
        return arr;
    }
    var currIndex = Math.floor(arr.length/ 2);
    var curr = arr.splice(currIndex, 1)[0];
    var left = [], right = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        item < curr ? left.push(item) : right.push(item);
    }
    return quickSort(left).concat(curr, quickSort(right));
}
console.log(quickSort(a));

// 插入排序
function insert(arr) {
    var handle = [];
    handle.push(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        var curr = arr[i];
        for (var j = handle.length -1; j >= 0; j--) {
            if(curr >  handle[j]) {
                handle.splice(j+1,0, curr)
                break;
            }
            if(j == 0) {
                handle.unshift(curr);
            }
        }
    }
    return handle
}
console.log(insert(a));

// 数组去重
// [...new Set(arr)], Array.from([new Set(arr)])
// 空数组，加for， indexOf
// 利用obj的key是唯一的


//数组实现flat
// 调用tostring() 方法  arr.toStribg().split(',').map((item) => parseFloat(item));
// es6 的 flat(infinity)


// 斐波那契序列

//函数柯理化
function curry() {
    var fn = [].shift.call(arguments);
    var args = [].slice.call(arguments);
    var _this = this;
    return function () {
        var newArgs = args.concat([].slice.call(arguments));
        if (newArgs.length < args.length) {
            return curry.call(_this, fn, newArgs);
        }
        return fn.call(this, newArgs)

    }

}



// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
//
// add(1)(2)(3)                // 6
// add(1, 2, 3)(4)             // 10
// add(1)(2)(3)(4)(5)          // 15
// add(2, 6)(1)                // 9




function MyPromise() {
    
}