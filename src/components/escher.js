import React from 'react';

const s_svg = {
	width: "100%",
	height: "100%",
};

class Escher extends React.Component {
	render() {
		let {reactions, nodes, text_labels, canvas} = this.props.Data;
		console.log(this.props);
		return <svg style={s_svg} viewBox={canvas.x + " " + canvas.y + " " + canvas.width + " " + canvas.height}>
			<g id="Reactions">
				{Object.entries(reactions).map(function ([key, reaction]) {
					return Object.values(reaction.segments).map(function (segment) {
						let from_node = nodes[segment.from_node_id];
						let to_node = nodes[segment.to_node_id];
						return <line x1={from_node.x} y1={from_node.y} x2={to_node.x} y2={to_node.y} strokeWidth="10" stroke="lightgray" />;
					});
				})}
			</g>
			<g id="Nodes">
				{Object.entries(nodes).map(function ([key, node]) {
					return <g key={key} data={node}>
						<circle cx={node.x} cy={node.y} fill="orange" strokeWidth="1px" stroke="black"  r={10+10*(+node.node_is_primary)} />
						<text x={node.label_x} y={node.label_y} fontSize="3em">{node.bigg_id}</text>
					</g>;
				})}
			</g>
		</svg>
	};
}

export default Escher;
