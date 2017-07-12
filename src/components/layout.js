// @flow
import React from 'react';
import SplitPane from 'react-split-pane';
import './splitPane.css';

class Layout extends React.Component {
		render() {
			return <SplitPane split="vertical" minSize={50} defaultSize={100}>
				{this.props.children[0]}
				{this.props.children[1]}
			</SplitPane>
		};
}

export default Layout;
