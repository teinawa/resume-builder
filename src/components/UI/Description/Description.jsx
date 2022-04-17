import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

const Description = ({isPrimary, isSecondary, className, children,  ...attrs}) => {
  const classes= cx('ui-text', className, {
    isPrimary,
    isSecondary,
  })
  return (
      <p className={classes}
         contentEditable
         suppressContentEditableWarning
         spellCheck={false}
         {...attrs}
      >
        {children}
      </p>
  )
}
Description.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

Description.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: '',
  // children: null,
  // возникнет ошибка при вызове пропса без элементов внутри aka пустого пропса
}

export default Description