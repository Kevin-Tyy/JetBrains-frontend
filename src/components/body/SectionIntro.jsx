import { Typography } from '@mui/material'
import React from 'react'
import logo from '../images/jetBrains.png'

const IntroBody = () => {
  return (
    <div className='h-600 flex flex-col justify-center items-center w-full 2xl:w-4/5'>
        <div className='lg:w-850 ml-10 lg:ml-0'>
           <img src={logo} className='w-44'/>

            <Typography variant='h2' sx={{ my : '10px', fontWeight: 'bold' , fontSize : { xs : '40px' , md: '70px'}}} className="text-gray-100">
            JetBrains Academy
            </Typography>
            <Typography variant='h4' className='text-gray-200 '>
                The place for learning and teaching computer science your way
            </Typography>

        </div>
    </div>
  )
}

export default IntroBody