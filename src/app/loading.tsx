import { Loader } from '@mantine/core'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <Loader color="#FF7A00" />
    </div>
  )
}

export default Loading
