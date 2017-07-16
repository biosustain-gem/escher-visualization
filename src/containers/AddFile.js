/**
 * Created by s163601 on 15/07/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addFile } from '../actions'

let AddFile = ({ dispatch }) => {
	let input;
	
	let handleDataChange = (e) => {
		e.preventDefault();
		
		let reader = new FileReader();
		let file = e.target.files[0];
		
		reader.onloadend = () => {
			dispatch(addFile(reader.result,file.name));
		};
		reader.readAsText(file);
	};
	
	return (
		<div>
			<input type="file"
						 accept=".json"
						 onChange={(e)=>handleDataChange(e)}
						 ref={node => {input = node}} />
		</div>
	)
}
AddFile = connect()(AddFile)

export default AddFile