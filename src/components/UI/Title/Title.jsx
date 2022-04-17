import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;

  button {
    display: inline-block;
    transition: 0.1s all ease;
    opacity: 0 !important;
  }

  &:hover button {
    opacity: 1 !important;
  }

  p {
    display: inline-block;
    margin-bottom: 0;
  }
`

const Title = ({
                 size, isUppercase, isShownButton, className, children, onClick, ...attrs
               }) => {
  const classes = cx(`ui-title-${size}`, className, {isUppercase})
  return (<Wrapper>
    <p
        className={classes}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        {...attrs}
    >
      {children}
    </p>
    {isShownButton && (<button className={'ui-button isLink'} onClick={onClick}>+</button>)}
  </Wrapper>)
}

Title.propTypes = {
  size: propTypes.oneOf(['1', '2', '3']),
  isUppercase: propTypes.bool,
  isShownButton: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
}

Title.defaultProps = {
  size: '1', isUppercase: false, className: '',
  isShownButton: false,
  onClick: () => {
  },
}

export default Title