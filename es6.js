// map 和 set
let set = new Set();
set.add(2);
console.log(set);


// 手写一个promise ，简易版本
function Mypromise(fn){
    var state = 'pending', calbacks = [], value = null;
    this.then  = function(onFulfilled){
        if (state == 'pending') {
            callbacks.push(fn);
            return this;
        }
        onFulfilled(value);
        return this;
    };
    function resolve(newValue) {
        value = newValue;
        state = 'fulfilied';
        setTimeout(() => {
            calbacks.forEach((callback) => {
                callback(value)
            })  
        }, 0);
        
    }
    fn(resolve);
}







