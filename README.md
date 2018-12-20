<h1 align="center">安装eslint步骤</h1>

## 目录
- <strong>安装流程</strong>
  - [全局安装eslint](#安装-eslint)
    - npm install -g eslint
    - npm install --save-dev eslint@4.13.0
  - [初始化配置文件](#初始化配置文件)
    - eslint --init
  - [安装第一步](#安装第一步)
    - [安装流程配置](#安装流程配置)
  - [安装 prettier](#安装-prettier)
    - npm install --save-dev prettier
  - [安装 prettier 相关插件](#安装-prettier-相关插件)
    - npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier
  - [安装 babel 依赖](#安装-babel-依赖)
    - npm install babel-eslint
    - npm install --save-dev babel-plugin-transform-object-rest-spread
  - [修改 eslintrc 文件配置](#修改-eslintrc-文件配置)
    - 替换原有的 `.eslintrc.json` 文件内容
- <strong>常见问题</strong>
  - [项目运行报错](#项目运行报错)
    - Couldn't find preset "stage-0" relative to directory
  - [版本号注意不能有尖括号](#版本号注意不能有尖括号)
- <strong>打包</strong>
  - [打包](#打包)
- <strong>关闭 ESLint</strong>
  - [关闭 ESLint 步骤](#关闭-ESLint-步骤)  
- <strong>关于webpack4</strong>
  - [关于webpack4版本与webpack3的区别](#关于webpack4版本与webpack3的区别)  


## 安装 eslint

#### 全局安装

目前下面教程是针对webpack3进行的说明，webpack4有部分变更, `node` 要求10以上版本
```js
npm install -g eslint
```
>Note:如果没用全局安装，在接下来的初始化项目中，eslint命令会抛出不是内部或外部命令

#### 单个项目使用

>Note:这里是针对webpack3进行的配置
```js
npm install --save-dev eslint@4.13.0
```
>Note:这里使用 `4.13.0` 版本的原因是照顾webpack中针对 `no-unused-vars` 规则以及一些其他问题所产生的解决方式，将版本设置未 `4.13.0` ，针对webpack4请看 [关于webpack4版本与webpack3的区别](#关于webpack4版本与webpack3的区别) 这里会有一些版本号修改
## 初始化配置文件
```js
eslint --init
```
>Note:在根目录下初始化文件,自动创建 `.eslintrc.json` 文件

## 安装第一步
#### 安装流程配置
这里推荐使用第一个
- <strong>Answer Questions about your style</strong> :（推荐）根据提示选择相应的规则设置
- Use a popular style guide:选择一个已经写好的规则配置
- Inspect your JavaScript file(s):根据源码文件内容生成规则配置
最后一步：建议配置为JSON文件
#### 完整配置

<img src="https://github.com/wudlin/eslint/blob/master/eslintInit.png?width=890">

>Note:以上文件在安装完成之后均可在 .eslintrc.json文件修改
```diff
my-app/
+ .eslintrc.json
  src/
  node_modules/
  package.json
  ···
```
## 安装 prettier
```js
npm install --save-dev prettier
```

## 安装 prettier 相关插件
```js
npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier
```
## 安装 babel 依赖
```js
npm install babel-eslint
npm install --save-dev babel-plugin-transform-object-rest-spread
```

<h1 align="center">修改配置文件</h1>
</br>

## 修改 eslintrc 文件配置

文件路径

```diff
my-app/
  .eslintrc.json
  src/
  ···
```

- 替换原有的 `.eslintrc.json` 文件内容

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": ["plugin:react/recommended", "prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions": true
    },
    "ecmaVersion": 2018
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "indent": ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-console": 1,
    "no-debugger": 2,
    "no-unused-vars": 2,
    "no-extra-semi": 2,
    "no-empty-function": 2,
    "no-alert": 2,
    "radix": 2,
    "eqeqeq": 2,
    "default-case": 2,
    "no-redeclare": 2,
    "no-multiple-empty-lines": ["error", { "max": 0 }],
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-uses-vars": 2,
    "react/no-string-refs": 0,
    "react/prop-types": 0,
    "react/no-children-prop": 0,
    "react/jsx-key": 0,
    "react/no-unescaped-entities": 0,
    "react/no-deprecated": 0,
    "react/no-direct-mutation-state": 0,
    "react/jsx-no-target-blank": 0
  }
}

```
## 新建.babelrc

```diff
my-app/
+ .babelrc
  .eslintrc.json
  src/
  node_modules/
  package.json
  ···
```

添加如下配置

```js
{
  "presets": ["env", "react", "stage-0"],
  "plugins": ["transform-object-rest-spread", "transform-decorators-legacy"]
}
```

<h1 align="center">常见问题</h1>
</br>

## 项目运行报错

```diff
- Module build failed: Error: Couldn't find preset "stage-0" relative to directory
```
- 安装
```js
npm install babel-preset-stage-0
```

## 版本号注意不能有尖括号
<img src="https://github.com/wudlin/eslint/blob/master/edition.png?width=890">


<h1 align="center">打包</h1>

## 打包
下面段代码定义了一个未使用变量
>Note:打包过程中如果运行报错的规则在，打包同样会阻止并提示错误
```js
	render() {
	  var b;//定义未使用变量，这里用 `let const` 是一样效果
		// console.log('测试log警告影响打包');
		return (
      		···
		);
	}
```
下面打包报错内容与运行时抛出内容相同
>Note:这里警告并不会阻止打包
```js
./src/App.js
  Line 9:  'b' is defined but never used  no-unused-vars

Search for the keywords to learn more about each error.
```

<h1 align="center">关闭ESLint</h1>

## 关闭 ESLint 步骤
修改 `webpack.config.dev.js` 文件
```diff
my-app/
  config/
    webpack.config.dev.js
  .eslintrc.json
  src/
  ···
```
将webpack.config.dev.js中下面两段带有 eslintFormatter 字段的代码注释，即可关闭eslint
>Note:只会关闭eslint校验，不会影响 `git` 钩子，即 `husky` 的执行
<img src="https://github.com/wudlin/eslint/blob/master/eslint_off1.png?width=890">
<img src="https://github.com/wudlin/eslint/blob/master/eslint_off2.png?width=890">

<h1 align="center">关于webpack4</h1>

## 关于webpack4版本与webpack3的区别

>Note:这里的my-app所用的是webpack4版本,与上面所说的版本号有部分区别
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
>原因是应为后面使用了表情 `a` ，这里 `no-unused-vars` 规则会将表情和变量理解成一种，所以不会抛出错误



