import React from 'react'

const Title = ({title}) => {
  return (
    <p className='font-bold text-center text-lg md:text-xl text-dark dark:text-white my-2'>
        {title}
    </p>
  )
}

export default Title