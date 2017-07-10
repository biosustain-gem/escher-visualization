import React from 'react';
import SplitPane from 'react-split-pane';

function Layout(props){
		return (
			<SplitPane split="vertical" minSize={50} defaultSize={100}>
				<div>{props.children[0]}</div>
				<div>{props.children[1]}</div>
				<div>{props.children[2]}</div>
				<div>{props.children[3]}</div>
				<div>{props.children[4]}</div>
				<div>{props.children[5]}</div>
				<div>{props.children[6]}</div>
			</SplitPane>
		);
}

export default Layout;
