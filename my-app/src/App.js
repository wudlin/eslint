import React, { Component } from 'react';
import './App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		// var b;
		// console.log('测试log警告影响打包');
		return (
			<div className='App'>
				<header className='App-header'>
					<p>一个简单的应用 eslint + prettier 规范的项目</p>
					<a
						className='App-link'
						href='https://github.com/wudlin/eslint'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn eslint --prettier
					</a>
				</header>
			</div>
		);
	}
}
export default App;
