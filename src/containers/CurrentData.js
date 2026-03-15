/**
 * Created by s163601 on 16/07/17.
 */
import { connect } from 'react-redux'
import { toggleFile } from '../actions'
import File from '../components/File'

const getVisibleFiles = (files, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return files;
		case 'SHOW_COMPLETED':
			return files.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return files.filter(t => !t.completed);
		default:
			return files;
	}
};

const mapStateToProps = state => {
	return {
		fileList: getVisibleFiles(state.fileList.files, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onFileClick: id => {
			dispatch(toggleFile(id))
		}
	}
};

const VisibleFileList = connect(
	mapStateToProps,
	mapDispatchToProps
)(File);

export default VisibleFileList
