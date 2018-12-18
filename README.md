<h1 align="center">安装eslint步骤</h1>

- [全局安装eslint](#安装-eslint)
  - npm install -g eslint
- [初始化配置文件](#初始化配置文件)
- [安装第一步](#安装第一步)
- [安装 prettier](#安装-prettier)
- [修改 .eslintrc.json 文件配置](#修改-.eslintrc.json-文件配置)
## 安装 eslint

#### 全局安装

```js
npm install -g eslint
```
>Note:如果没用全局安装，在接下来的初始化项目中，eslint命令会抛出不是内部或外部命令

#### 单个项目使用

```js
npm install --save-dev eslint@4.13.0
```

## 初始化配置文件
```js
eslint --init
```
>Note:在根目录下初始化文件,自动创建 `.eslintrc.json` 文件

## 安装第一步
这里推荐使用第一个

- <strong>Answer Questions about your style</strong> :（推荐）根据提示选择相应的规则设置
- Use a popular style guide:选择一个已经写好的规则配置
- Inspect your JavaScript file(s):根据源码文件内容生成规则配置

最后一步：建议配置为JSON文件
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

## 修改 .eslintrc.json 文件配置
替换原有的 `.eslintrc.json` 文件内容
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
