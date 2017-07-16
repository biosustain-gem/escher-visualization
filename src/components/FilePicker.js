/**
 * Created by s163601 on 15/07/17.
 */
/**
 * Created by s163601 on 15/07/17.
 */
import React from 'react';
import AddFile from '../containers/AddFile';
import VisibleFileList from '../containers/VisibleFileList';

let FilePicker = (props) => {
	return (<div>
		<AddFile />
		<VisibleFileList />
	</div>
	)
};

export default FilePicker