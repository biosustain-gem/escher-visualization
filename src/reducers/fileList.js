/**
 * Created by s163601 on 15/07/17.
 */
import init_Data from "../data/esher_map_pch_0317.json";

const fileList = (state = {
	files:[{
		id: 0,
		metaData: init_Data[0],
		data: init_Data[1],
		title: init_Data[0].map_name,
		name: "../data/esher_map_pch_0317.json",
		completed: false
	}],
	selected: 0
}, action) => {
	console.log(state,action);
	switch (action.type) {
		case 'ADD_FILE':
			let obj = JSON.parse(action.text);
			if (obj.constructor === Array) {
				let [metaData, data] = obj;
				return {
					files:  [
						...state.files,
						{
							id: action.id,
							metaData,
							data,
							title: metaData.map_name,
							name: action.name,
							completed: false
						}
					],
					selected: action.id
				}
			} else {
				let file = {
					id: action.id,
						title: "File " + action.name + " is not valid escher map.",
					completed: false
				};
				return {
					files: [
						...state.files,
						file
					],
					selected: undefined
				};
			}
		case 'SELECT_FILE':
			console.log(state,action.id);
			return {
				files: state.files,
				selected: action.id
			};
		default:
			return state
	}
};

export default fileList