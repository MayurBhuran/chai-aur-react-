import React from 'react'

function Select({
  PushSubscriptionOptions,
  label,
  classname ,
  ...props
}, ref) {
  const id = useId()
  return (
    <div className={`w-full ${classname}`}>
      {label && <label htmlFor={id} className='block mb-1 font-medium text-gray-700'>
        {label}</label>}
     <select 
     {...props}
     id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 ${classname}`}
      >
        {optins?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </select>
    </div>
  )
}

export default Select
