/**
 * Created by s163601 on 15/07/17.
 */
import { connect } from 'react-redux'
import Escher from '../components/escher'

function mapStateToPropsFactory(initialState, ownProps) {
	// a closure for ownProps is created
	// this factory is not invoked everytime the component
	// changes it's props
	
	console.log("init",initialState, ownProps);
	return function mapStateToProps(state) {
		console.log("state",state);
		let file = state.fileList.files[state.fileList.selected];
		if (!file) return state;
		console.log(file);
		return file;
	};
}

const EscherData = connect(
	mapStateToPropsFactory
)(Escher);

export default EscherData