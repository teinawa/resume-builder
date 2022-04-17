import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'


const Title = ({size, isUpperCase, className, children, ...attrs}) => {
  const classes= cx(`ui-title-${size}`, className, {isUpperCase})
  return (
      <p
          className={classes}
          contentEditable
          suppressContentEditableWarning
          spellCheck={false}
          {...attrs}
      >
        {children}
      </p>
  )
}

Title.propTypes = {
  size: propTypes.oneOf(['1', '2', '3']),
  isUpperCase: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

Title.defaultProps = {
  size: '1',
  isUpperCase: false,
  className: '',
}

export default Title