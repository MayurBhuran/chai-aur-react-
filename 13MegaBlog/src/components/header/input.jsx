import React, {useId} from 'react'


const Input = React.forwardRef( function
  Input({
  label,
  type = "text",
  classname = '',
  ...props
}, ref){
  const id = useId()
    return (
      <div className='w-full'>
        {label && <label htmlFor={id} className='block mb-1 font-medium
         text-gray-700'>{label}
         </label>
         }
         <input type={type} 
         className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 
          ${classname}`}
         ref={ref}
         {...props}
         />
      </div>
    )
  }
)

export default Input
