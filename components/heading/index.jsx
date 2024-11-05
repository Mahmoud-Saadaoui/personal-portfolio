import React from 'react'

const Title = ({title}) => {
  return (
    <p className='font-bold text-center text-lg md:text-xl text-dark dark:text-white'>
        {title}
    </p>
  )
}

export default Title