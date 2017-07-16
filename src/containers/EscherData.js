/**
 * Created by s163601 on 15/07/17.
 */
import { connect } from 'react-redux'
import Escher from '../components/escher'

const mapStateToProps = state => {
	console.log(state);
	let file = state.fileList.files[state.fileList.selected];
	if (!file) return state;
	console.log(file);
	return file;
};

const EscherData = connect(
	mapStateToProps
)(Escher);

export default EscherData