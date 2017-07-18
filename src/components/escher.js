// @flow
import React from 'react';
import './escher.css';

class Reactions extends React.Component {
	shouldComponentUpdate() {
		console.log(arguments);
		return false;
	};
	
	render () {
		console.log(this);
		return <g>
			{console.time("reactions")}
			{Object.entries(this.props.reactions).map(key_reaction => {
				return <Reaction key={key_reaction[0]}
				                 label={key_reaction[1].bigg_id}
				                 label_x={key_reaction[1].label_x}
				                 label_y={key_reaction[1].label_y}
				                 segments={key_reaction[1].segments}
				                 nodes={this.props.nodes}/>;
			})}
			{console.timeEnd("reactions")}
		</g>
	};
}
function Reaction(props) {
	return <g>
		{Object.entries(props.segments).map(function ([key,segment]) {
			return <Segment key={key}
			                from_node={props.nodes[segment.from_node_id] || {}}
			                b1={segment.b1}
			                b2={segment.b2}
			                to_node={props.nodes[segment.to_node_id] || {}}/>
		})}
		{props.label && <text x={props.label_x} y={props.label_y} className="label reaction">{props.label}</text>}
	</g>
}
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

class Nodes extends React.Component {
	shouldComponentUpdate() {
		console.log(arguments);
		return false;
	};
	
	render() {
		return <g>
			{console.time("nodes")}
			{Object.entries(this.props.nodes).map(function ([key, node]) {
				if (node.node_type === "metabolite") {
					return <Metabolite key={key} node={node}/>;
				}
				return <Marker key={key} x={node.x} y={node.y} r={10} type={node.node_type}/>;
			})}
			{console.timeEnd("nodes")}
		</g>;
	};
}
function Marker(props) {
	return <circle cx={props.x}
				 				 cy={props.y}
								 className={props.type}
								 r={props.r} />;
}
class Metabolite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	};
	
	click = (e) => {
		console.log(e,this);
	};
	render () {
		return <g className="metabolite"
		          onClick={this.click}>
			<Marker x={this.props.node.x}
			        y={this.props.node.y}
			        r={10+10*(+this.props.node.node_is_primary)} />
			<text x={this.props.node.label_x}
			      y={this.props.node.label_y}>
				{this.props.node.bigg_id}
			</text>
		</g>;
	}
}

class Escher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zoom: 1
		}
	}
	
	zoom = (e) => {
		if (!e.altKey) return;
		e.preventDefault();
		
		let scale = this.state.zoom-e.deltaY/300; //arbitral value
		if (scale < 1) scale = 1;
		this.setState({zoom:scale})
	};
	
	render() {
		console.time("renderescher");
		console.log(this.props);
		if (!this.props.data) return null;
		let {reactions, nodes, text_labels, canvas} = this.props.data;
		return <svg className="escher"
		            onWheel={this.zoom} transform={"scale("+this.state.zoom+")"}
		            viewBox={canvas.x + " " + canvas.y + " " + canvas.width + " " + canvas.height}>
			<Reactions reactions={reactions} nodes={nodes} />
			<Nodes nodes={nodes} />
			{console.timeEnd("renderescher")}
		</svg>;
	};
}

export default Escher;
