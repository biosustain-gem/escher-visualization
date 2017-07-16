/**
 * Created by s163601 on 15/07/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

const File = ({ onClick, completed, title }) => (
	<ListGroupItem
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{title}
	</ListGroupItem>
)

File.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
}

export default File