# vue/cli 的使用
## 1.安装
```shell
npm install -g @vue/cli
```
## 2 创建工程

```shell
# 创建一个名为hello-world的工程
vue create hello-world

```

# element-ui的使用

## 1 安装
```shell
npm i element-ui -S
```
## 2 使用
> 在main.js中引入并使用
```shell

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

```

# Vue Router的使用
[官网](https://router.vuejs.org/zh/introduction.html)

## 1安装
```shell
# 安装3版本的vue-router
npm install vue-router@3

```

## 2 项目引用

```js

   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入动态路由组件 组件
   import About from '../components/About'
   import Home from '../components/Home'
   // 使用插件
   Vue.use(VueRouter)

   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
   	routes:[
   		{
   			path:'/about',
   			component:About
   		},
   		{
   			path:'/home',
   			component:Home
   		}
   	]
   })
   
   //暴露router
   export default router



```

# 安装axios、qs、mockjs

> - **axios**：一个基于 promise 的 HTTP 库，类ajax
>
> - **qs**：查询参数序列化和解析库
>
> - **mockjs**：为我们生成随机数据的工具库

## 1axios

### 1.1 安装依赖

`cnpm install axios --save`

### 1.2在`main.js`中全局引入axios。

```js
import axios from 'axios'

Vue.prototype.$axios = axios //在axios 绑定在axios的原型上
```

组件中，我们就可以通过this.$axios.get()来发起我们的请求了哈。当然了，后面我们添加axios拦截的时候我们需要修改引入的编写。 同时，我们同步安装一个qs，什么是qs？qs是一个流行的查询参数序列化和解析库。可以将一个普通的object序列化成一个查询字符串，或者反过来将一个查询字符串解析成一个object,帮助我们查询字符串解析和序列化字符串。

## 2  qs

### 2.1 安装

```shell
npm install qs --save
```





## 3 mock

[官方使用方法](https://github.com/nuysoft/Mock/wiki)

### 3.1 安装

```shell
npm install mockjs --save-dev
```

### 3.2 具体使用

 在src目录下新建mock.js文件，用于编写随机数据的api，然后我们需要在main.js中引入这个文件：

- src/main.js

```js
require("./mock") //引入mock数据，关闭则注释该行
```

这样 mackjs会自动为我们拦截ajax，并自动匹配路径返回数据！





# element-ui

##  1 布局的使用

**Layout 布局**

通过基础的 24 分栏，迅速简便地创建布局。



### Row Attributes

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| :------ | :------------------------------------ | :----- | :------------------------------------------ | :----- |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | —      |
| tag     | 自定义元素标签                        | string | *                                           | div    |

### [¶](https://element.eleme.cn/#/zh-CN/component/layout#col-attributes)Col Attributes

| 参数   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| :----- | :------------------------------------- | :------------------------------------------ | :----- | :----- |
| span   | 栅格占据的列数                         | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| push   | 栅格向右移动格数                       | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| tag    | 自定义元素标签                         | string                                      | *      | div    |





## 表单

### Input Attributes

| 参数            | 说明                                                         | 类型             | 可选值                                                       | 默认值 |
| :-------------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- | :----- |
| type            | 类型                                                         | string           | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types) | text   |
| value / v-model | 绑定值                                                       | string / number  | —                                                            | —      |
| maxlength       | 原生属性，最大输入长度                                       | number           | —                                                            | —      |
| minlength       | 原生属性，最小输入长度                                       | number           | —                                                            | —      |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean          | —                                                            | false  |
| placeholder     | 输入框占位文本                                               | string           | —                                                            | —      |
| clearable       | 是否可清空                                                   | boolean          | —                                                            | false  |
| show-password   | 是否显示切换密码图标                                         | boolean          | —                                                            | false  |
| disabled        | 禁用                                                         | boolean          | —                                                            | false  |
| size            | 输入框尺寸，只在 `type!="textarea"` 时有效                   | string           | medium / small / mini                                        | —      |
| prefix-icon     | 输入框头部图标                                               | string           | —                                                            | —      |
| suffix-icon     | 输入框尾部图标                                               | string           | —                                                            | —      |
| rows            | 输入框行数，只对 `type="textarea"` 有效                      | number           | —                                                            | 2      |
| autosize        | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | —                                                            | false  |
| autocomplete    | 原生属性，自动补全                                           | string           | on, off                                                      | off    |
| auto-complete   | 下个主版本弃用                                               | string           | on, off                                                      | off    |
| name            | 原生属性                                                     | string           | —                                                            | —      |
| readonly        | 原生属性，是否只读                                           | boolean          | —                                                            | false  |
| max             | 原生属性，设置最大值                                         | —                | —                                                            | —      |
| min             | 原生属性，设置最小值                                         | —                | —                                                            | —      |
| step            | 原生属性，设置输入字段的合法数字间隔                         | —                | —                                                            | —      |
| resize          | 控制是否能被用户缩放                                         | string           | none, both, horizontal, vertical                             | —      |
| autofocus       | 原生属性，自动获取焦点                                       | boolean          | true, false                                                  | false  |
| form            | 原生属性                                                     | string           | —                                                            | —      |
| label           | 输入框关联的label文字                                        | string           | —                                                            | —      |
| tabindex        | 输入框的tabindex                                             | string           | -                                                            | -      |
| validate-event  | 输入时是否触发表单的校验                                     | boolean          | -                                                            | true   |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#input-slots)Input Slots

| name    | 说明                                    |
| :------ | :-------------------------------------- |
| prefix  | 输入框头部内容，只对 `type="text"` 有效 |
| suffix  | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append  | 输入框后置内容，只对 `type="text"` 有效 |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#input-events)Input Events

| 事件名称 | 说明                                          | 回调参数                  |
| :------- | :-------------------------------------------- | :------------------------ |
| blur     | 在 Input 失去焦点时触发                       | (event: Event)            |
| focus    | 在 Input 获得焦点时触发                       | (event: Event)            |
| change   | 仅在输入框失去焦点或用户按下回车时触发        | (value: string \| number) |
| input    | 在 Input 值改变时触发                         | (value: string \| number) |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#input-methods)Input Methods

| 方法名 | 说明                | 参数 |
| :----- | :------------------ | :--- |
| focus  | 使 input 获取焦点   | —    |
| blur   | 使 input 失去焦点   | —    |
| select | 选中 input 中的文字 | —    |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-attributes)Autocomplete Attributes

| 参数                  | 说明                                                         | 类型                            | 可选值                                                       | 默认值       |
| :-------------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- | :----------- |
| placeholder           | 输入框占位文本                                               | string                          | —                                                            | —            |
| disabled              | 禁用                                                         | boolean                         | —                                                            | false        |
| value-key             | 输入建议对象中用于显示的键名                                 | string                          | —                                                            | value        |
| value                 | 必填值，输入绑定值                                           | string                          | —                                                            | —            |
| debounce              | 获取输入建议的去抖延时                                       | number                          | —                                                            | 300          |
| placement             | 菜单弹出位置                                                 | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions     | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 | Function(queryString, callback) | —                                                            | —            |
| popper-class          | Autocomplete 下拉列表的类名                                  | string                          | —                                                            | —            |
| trigger-on-focus      | 是否在输入框 focus 时显示建议列表                            | boolean                         | —                                                            | true         |
| name                  | 原生属性                                                     | string                          | —                                                            | —            |
| select-when-unmatched | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件 | boolean                         | —                                                            | false        |
| label                 | 输入框关联的label文字                                        | string                          | —                                                            | —            |
| prefix-icon           | 输入框头部图标                                               | string                          | —                                                            | —            |
| suffix-icon           | 输入框尾部图标                                               | string                          | —                                                            | —            |
| hide-loading          | 是否隐藏远程加载时的加载图标                                 | boolean                         | —                                                            | false        |
| popper-append-to-body | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false | boolean                         | -                                                            | true         |
| highlight-first-item  | 是否默认突出显示远程搜索建议中的第一项                       | boolean                         | —                                                            | false        |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-slots)Autocomplete Slots

| name    | 说明           |
| :------ | :------------- |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-scoped-slot)Autocomplete Scoped Slot

| name | 说明                            |
| :--- | :------------------------------ |
| —    | 自定义输入建议，参数为 { item } |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-events)Autocomplete Events

| 事件名称 | 说明                  | 回调参数                  |
| :------- | :-------------------- | :------------------------ |
| select   | 点击选中建议项时触发  | 选中建议项                |
| change   | 在 Input 值改变时触发 | (value: string \| number) |

### [¶](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-methods)Autocomplete Methods

| 方法名 | 说明              | 参数 |
| :----- | :---------------- | :--- |
| focus  | 使 input 获取焦点 | -    |



# 框架分析

![image-20220718123534089](https://i0.hdslb.com/bfs/album/993b99c069242ec5a4b290e2ee69011b7f02518d.png)

左侧菜单栏为一个独立的组件sicermenu， 头部为独立的组件header

而主内容区，通过路由动态显示内容。











# 思考

## 左侧导航栏铺满整个左侧

![image-20220718111957113](https://i0.hdslb.com/bfs/album/46a068736de2820fec19fbbbc2097daa854f885e.png)

```
height: 100vh;
```

## header 左侧的头像向左向下一点（居中）

![image-20220718112202325](https://i0.hdslb.com/bfs/album/fd52bcd21c6c7745c05f34227ccd5714c893ef05.png)



















# 单词

gutter： 边沟



# 坑



# bottom

