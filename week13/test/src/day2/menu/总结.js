/**
 * yarn add react-router-dom
 * HashRouter  BrowserRouter  MemoryRouter  
 * Route 有几个常用的行内属性  path  路径 
 *                           render  后跟函数体 返回的要渲染的解构， 常跟 Redirect合起来用
 *                           component  对应路由下的组件
 *                           exact    只有完全相等时 才会走到该路径
 * Switch  它是用来包含 Route标签的； 当某个Route的path被匹配上时， 就不再看下边的Route了
 * Redirect 一般跟render结合使用
 * 
 * Link  行内属性 to后跟 要跳转的路径；className 添加类名；
 * NavLink 一个特殊的Link; 有activeClassName 属性，走到当前路径时， 对应的a标签会有相应的类名
 */