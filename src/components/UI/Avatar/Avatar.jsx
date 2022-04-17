import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

import {ReactComponent as CameraIcon} from "../../../assets/img/camera.svg";

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #bfbfbf;

  input {
    display: none;
  }

  label, label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  }

`

const Avatar = ({isSquare}) => {
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [preview, setPreview] = React.useState(null)

  React.useEffect(() => {
    const objectURL = selectedFile && URL.createObjectURL(selectedFile)
    setPreview(objectURL)

    return () => URL.revokeObjectURL(objectURL)
  }, [selectedFile])

  return (

      <Wrapper isSquare={isSquare}>
        <input
            id="Avatar"
            type='file'
            value=''
            onChange={(event => setSelectedFile(event.target.files[0]))}
        />
        <label htmlFor='Avatar'>
          {preview ? <div style={{
            backgroundImage: `url(${preview})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            borderRadius: '50%'
          }}/> : <CameraIcon/>}
        </label>
      </Wrapper>)
}

Avatar.propTypes = {
  isSquare: propTypes.bool,
}

Avatar.defaultTypes = {
  isSquare: false,

}

export default Avatar