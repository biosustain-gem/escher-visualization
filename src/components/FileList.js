/**
 * Created by s163601 on 15/07/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import File from './File'
import { ListGroup } from 'react-bootstrap'

const FileList = ({ fileList, onFileClick }) => (
  <ListGroup>
    {console.log(fileList,onFileClick)}
    {fileList.map(file => (
      <File key={file.id} {...file} onClick={() => onFileClick(file.id)} />
    ))}
  </ListGroup>
);

// FileList.propTypes = {
// 	fileList: PropTypes.object.isRequired,
//   onFileClick: PropTypes.func.isRequireds
// };

export default FileList