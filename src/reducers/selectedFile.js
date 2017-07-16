/**
 * Created by s163601 on 15/07/17.
 */
const selectedFile = (state = [], action) => {
	console.log(state,action);
	switch (action.type) {
		case 'SELECT_FILE':
			return action.file;
		case 'SELECT_FILE_BY_ID':
			return action.file_id;
		default:
			return state
	}
};

export default selectedFile