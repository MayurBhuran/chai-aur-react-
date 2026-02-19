import React, { Children } from 'react'

function Button({
  children,
  type = "button",
  bgcolor = 'blue-500',
  textcolor = 'text-white',
  className = '',
  ...props
}) {

  return (
    <button className={`px-4 py-2 rounded-lg bg-${bgcolor} 
    ${textcolor} ${className}`}
     type={type} {...props}>
      {children}
      </button>
  )
}

export default Button
