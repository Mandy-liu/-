import React from 'react';//引入react核心库
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-left">
        <h1>react使用第一天</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
      <footer className="App-right">
        <h1>用函数方式创建组件</h1>
        <img src={logo} alt=""></img>
      </footer>
    </div>
  );
}

export default App;



// import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-left">
//           <h1>用类的方式创建组件</h1>
//           <h2>需要按需引入组件，严格按照命名，还要抛出</h2>
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//       </div>
//     )
//   }
// }
// export default App