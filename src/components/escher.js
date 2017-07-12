// @flow
import React from 'react';
import './escher.css';

class Escher extends React.Component {
	render() {
		{console.time("renderescher")}
		let {reactions, nodes, text_labels, canvas} = this.props.Data;
		console.log(this.props);
		return <svg className="escher"
		            viewBox={canvas.x + " " + canvas.y + " " + canvas.width + " " + canvas.height}>
			<g id="Reactions">
				{console.time("reactions")}
				{Object.entries(reactions).map(function ([key, reaction]) {
					return Object.values(reaction.segments).map(function (segment) {
						let from_node = nodes[segment.from_node_id],
								to_node = nodes[segment.to_node_id],
								{b1,b2} = segment;
						if (b1) {
							return <path d={"M" + from_node.x + "," + from_node.y + "C" + b1.x + "," + b1.y + " " + b2.x + "," + b2.y + " " + to_node.x + "," + to_node.y}
							             className="segment" />
						} else {
							return <line x1={from_node.x}
							             y1={from_node.y}
							             x2={to_node.x}
							             y2={to_node.y}
							             className="segment" />;
						}
					});
				})}
				{console.timeEnd("reactions")}
			</g>
			<g id="Nodes">
				{console.time("nodes")}
				{Object.entries(nodes).map(function ([key, node]) {
					switch(node.node_type) {
						case "metabolite":
							return <g key={key}
							          className="metabolite">
								<circle cx={node.x}
								        cy={node.y}
								        r={10+10*(+node.node_is_primary)} />
								<text x={node.label_x}
								      y={node.label_y}>
									{node.bigg_id}
								</text>
							</g>;
						case "multimarker":
							return <circle key={key}
							               cx={node.x}
							               cy={node.y}
							               className="multimarker"
							               r={10} />;
						case "midmarker":
							return <circle key={key}
							               cx={node.x}
							               cy={node.y}
							               className="midmarker"
							               r={10} />;
						default:
							console.error("Unknown type of node",node);
					};
				})}
				{console.timeEnd("nodes")}
			</g>
			{console.timeEnd("renderescher")}
		</svg>
	};
}

export default Escher;
