/**
 * Created by s163601 on 15/07/17.
 */
import { connect } from 'react-redux'
import { toggleFile } from '../actions'
import FileList from '../components/FileList'

const getVisibleFiles = (files, filter) => {
	console.log(files);
	switch (filter) {
		case 'SHOW_ALL':
			return files
		case 'SHOW_COMPLETED':
			return files.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return files.filter(t => !t.completed)
	}
};

const mapStateToProps = state => {
	console.log(state);
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
)(FileList);

export default VisibleFileList