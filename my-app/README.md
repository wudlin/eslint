## 项目说名

用于测试项目,使用 `webpack4` 版

#### 配置更改

```js
"eslint": "5.6.0"
"babel-eslint": "9.0.0"

```
#### 问题
>Note:这里的my-app所用的是webpack4版本,与之前所说的webpack3版本号有部分区别
```diff
-   "babel-eslint": "^7.2.3",
+   "babel-eslint": "9.0.0",
-   "eslint": "4.13.0",
+   "eslint": "5.6.0",
```
- 这里解决了 `"eslint": "4.13.0"` 对于定义未使用变量需要配置 `.babelrc` 文件以及其中对于 `"stage-0"` 的配置问题
- 发现产生新的问题
```js
	render() {
		var a;
		return (
			<div className='App'>
					<a href='https://github.com/wudlin/eslint'>
						Learn eslint --prettier
					</a>
				</header>
			</div>
		);
	}
```
>Note:这里在项目中定义了变量 `a` 但未使用，在项目运行时 `no-unused-vars` 规则并不会起到抛出错误的作用
>原因是应为后面使用了表情 `a` ，这里 `no-unused-vars` 规则会将标签和变量理解成一种，所以不会抛出错误
