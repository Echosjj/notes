## css规范

### 命名规范
* ID和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称。

* 不推荐:
```js
.fw-800{
    font-weigth: 800;
}
```
* 推荐:
```js
.heavy{
    font-weight: 800;
}
```

### 属性格式
#### 尽量使用缩写
* 代码效率和可读性

* 不推荐:
```js 
border-top-style: none;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0; 
```
* 推荐:
```js 
border-top: 0;
padding: 0 1em 2em 1em;
```


#### 省略掉0后面的单位

* 不推荐:
```js 
margin: 0em;
padding-bottom: 0px;
```
* 推荐:
```js 
margin: 0;
padding-bottom: 0;
```

#### 属性顺序

* 结构型属性
1. display; 
2. position, left, top, right, etc;
3. overflow, float, clear, etc;
4. width, height, margin, padding; 

* 表现型属性
1. background, border, etc;
2. font, text; 

* 不推荐: 
```js 
.box{
  font-family:'Arial', sans-serif;
  border: 3px solid #ddd;
  left: 30%;
  position: absolute;
  text-transform: uppercase;
  background-color: #eee;
  right: 30%;
  isplay: block;
  font-size: 1.5rem;
  overflow: hidden;
  padding: 1em;
  margin: 1em;
}

```
* 推荐: 
```js 
.box{
  display: block;
  position: absolute;
  left: 30%;
  right: 30%;
  overflow: hidden;
  margin: 1em;
  padding: 1em;
  background-color: #eee;
  border: 3px solid #ddd;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}
```
