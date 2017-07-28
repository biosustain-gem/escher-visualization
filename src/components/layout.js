// @flow
import React from 'react';
import SplitPane from 'react-split-pane';
import './layout.css';
import ContainerDimensions from 'react-container-dimensions';

const s_layout = {
	display: "flex",
	flexDirection: "column",
	height: "100vh"
};

const s_body = {
	position: "relative",
	height: "100%"
};

class Layout extends React.Component {
		render() {
			return <div style={s_layout}>
				<div style={s_body}>
					<SplitPane split="vertical" minSize={50} defaultSize={250} >
						{this.props.children[0]}
						<ContainerDimensions>
							{this.props.children[1]}
						</ContainerDimensions>
					</SplitPane>
				</div>
			</div>
		};
}

export default Layout;
