// @flow
import React from 'react';
import './escher.css';

function Segment(props) {
	if (props.b1) {
		return <path d={"M" + props.from_node.x + "," + props.from_node.y +
										"C" + props.b1.x + "," + props.b1.y +
										" " + props.b2.x + "," + props.b2.y +
										" " + props.to_node.x + "," + props.to_node.y}
		             className="segment" />
	} else {
		return <line x1={props.from_node.x}
		             y1={props.from_node.y}
		             x2={props.to_node.x}
		             y2={props.to_node.y}
		             className="segment" />;
	}
}

function Reaction(props) {
	return <g>
		{Object.values(props.segments).map(segment =>
			<Segment from_node={props.nodes[segment.from_node_id] || {}}
			         b1={segment.b1}
			         b2={segment.b2}
			         to_node={props.nodes[segment.to_node_id] || {}} />
		)}
		{props.label && <text x={props.label_x} y={props.label_y} className="label reaction">{props.label}</text>}
	</g>
}

class Escher extends React.Component {
	render() {
		console.time("renderescher");
		let {reactions, nodes, text_labels, canvas} = this.props.Data;
		return <svg className="escher"
		            viewBox={canvas.x + " " + canvas.y + " " + canvas.width + " " + canvas.height}>
			<g id="Reactions">
				{console.time("reactions")}
				{Object.entries(reactions).map(function ([key, reaction]) {
					return <Reaction key={key}
						               label={reaction.bigg_id}
					                 label_x={reaction.label_x}
					                 label_y={reaction.label_y}
													 segments={reaction.segments}
													 nodes={nodes} />;
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
