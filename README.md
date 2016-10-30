# similar-react-router

similar react-router

## 用法

``` js
var React = reqiure('react');
var {Link,Route,Router,RouteHistory} = reqiure('simple-react-router');

var RootComponent = (props)=>{
    return (<div>
        <h2>This is RootComponent!</h2>
        <ul>
            <li>
                <Link to="/home/index" anchor={true}>首页</Link>
            </li>
            <li>
                <Link to="/home/list" anchor={true}>列表页</Link>
            </li>
            <li>
                <Link to="/home/detail" anchor={true}>详情页</Link>
            </li>
        </ul>
        <div>{props.children}</div>
    </div>)
}

var HomeIndexPage = ()=>{
    return (<div>
        This is HomeIndexPage!
    </div>)
}

var HomeListPage = ()=>{
    return (<div>
        This is HomeListPage!
    </div>)
}

var HomeDetailPage = ()=>{
    return (<div>
        This is HomeDetailPage!
    </div>)
}


class RouterApp extends React.Component {
	render(){
		return (
			<Router defaultRoute="/home/index" path="/" component={RootComponent}>
				<Route path="index" component={HomeIndexPage} />
                <Route path="list" component={HomeListPage} />
				<Route path="detail" component={HomeDetailPage} />
			</Router>
		)
	}
}
```
## 示例项目

- [react-umeditor-example](https://github.com/liuhong1happy/react-umeditor-example)

## API

- Router 定义根路由，指定defaultRoute(默认路由)
    - path 路由名称，这里指定为"/" `String`
    - component 路由对应的组件 `React.Component`
    - defaultRoute 默认路由 `String`
- Route 定义路由，可包含子路由
    - path 路由名称，这里指定为"/" `String`
    - component 路由对应的组件 `React.Component`
    - children 子路由 `Array<Route> or <Route>`
- Link 简单路由链接
    - to 跳转到的路由名称 `String`
    - onClick 路由点击回调函数，内部已经实现路由跳转 `Function`
    - anchor 是否渲染为a标签，否则就是span标签 `Boolean`
- RouteHistory 路由操纵，注意以下是属性或者方法，非props。
    - pushHash 跳转 `Function`
    - curHash 当前路由 `String`


## 特点

1. similar-react-router采用ES6写法，推荐使用webpack打包，loader采用babel-loader。

2. require引入react方式，可以兼容IE8。

3. 高度模仿react-router组件，采用hash实现，使用便捷。

## 联系方式

Email: [liuhong1happy](liuhong1.happy@163.com)
