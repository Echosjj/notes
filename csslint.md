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
  display: block;
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

#### 避免低效率选择器

##### 选择器的效率从高到低

1. id选择器（#myid）
2. 类选择器（.myclassname) 
3. 标签选择器（div,h1,p) 
4. 相邻选择器（h1+p）
5. 子选择器（ul < li) 
6. 后代选择器（li a) 
7. 通配符选择器（*） 
8. 属性选择器（a[rel="external"]） 
9. 伪类选择器（a:hover,li:nth-child）

* 尽量避免选择器的深层嵌套， 大于3层就考虑是否有必要

#### 模块化

* 利用less 和sass 提供的连接符 &- 完成 （现有项目中有用到）

* 推荐

```js

.m-detail {
	background: #fff;
	color: #333;
	&-hd {
		padding: 5px 10px;
		background: #eee;
		.title {
			background: #eee;
		}
	}
	&-bd {
		padding: 10px;
		.info {
			font-size: 14px;
			text-indent: 2em;
		}
	}
	&-ft {
		text-align: center;
		.more {
			color: blue;
		}
	}
}

```
* 编译后
```js 
.m-detail {
	background: #fff;
	color: #333;
}
.m-detail-hd {
	padding: 5px 10px;
	background: #eee;
}
.m-detail-hd .title {
	background: #eee;
}
.m-detail-bd {
	padding: 10px;
}
.m-detail-bd .info {
	font-size: 14px;
	text-indent: 2em;
}
.m-detail-ft {
	text-align: center;
}
.m-detail-ft .more {
	color: blue;
}

```


#### 规则和分号
* 每条规则后面加上分号结束
* 群组选择器换行

```js
.m-detail {
	background: #fff;
	color: #333;
}
```
```js
.m-detail,
.m-content,
.m-footer {
	background: #fff;
	color: #333;
}
```


#### 路径引用
* background-image的url 路径可以省略掉引号
* 在现有项目中 可使用别名@ 和stylus-loader中的～（相对路径） 完成地址的引用

* 不推荐
```js

 background-image: url('../../../assets/images/order/icon_one-way.png');
 
```
* 推荐
```js 

background-image: url(~@consumRecord/views/assets/images/icon_check_box_normal@3x.png);

```





