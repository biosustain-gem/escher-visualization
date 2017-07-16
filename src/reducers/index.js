/**
 * Created by s163601 on 15/07/17.
 */
import { combineReducers } from 'redux'
import fileList from './fileList'
import visibilityFilter from './visibilityFilter'

const dashboard = combineReducers({
	fileList,
	visibilityFilter
});

export default dashboard