import { Send, Twitter } from '@mui/icons-material'
import { Typography } from '@mui/material'
import BugReportIcon from '@mui/icons-material/BugReport';

import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center bg-neutral-300 py-10 lg:py-32 gap-10 lg:gap-20 px-4 xl:px-0'>
        <div className='w-full  lg:w-1/4'>   
            <Typography variant='h5' sx={{mb: 2}} className='text-black'>
              Do you want to learn or teach any languages or technologies that we haven’t covered? Let us know!
            </Typography>
            <form className='flex flex-col'>
                <input type="email" required={true} placeholder='Email address' className='w-full h-12 mb-2 border border-neutral-400 p-3 outline-none'/>
                <input type='text' required={true} placeholder='Your feedback'  className='w-full h-16 border border-neutral-400 p-3 outline-none mb-3'/>
                <Typography variant='caption'>
                     By submitting this form, I agree that JetBrains s.r.o. ("JetBrains") may use my name, email address, phone number, and country of residence to provide support. I agree that JetBrains may process said data using <span className='border-b border-black cursor-pointer hover:text-blue-700 hover:border-blue-500'>third-party services</span>  for this purpose in accordance with the <span className='border-b border-black cursor-pointer hover:text-blue-700 hover:border-blue-500'>JetBrains Privacy Policy.</span>
                </Typography>
                <button type='submit' className='bg-neutral-950 hover:bg-neutral-800 mt-7 text-white px-10 py-3 rounded-full'>
                  Submit
                </button>
            </form>
        </div>
        <div className='text-neutral-700'>
            <Typography variant="body1" sx={{ fontWeight : 'bold' , mb: 5}} className='text-black'>
                Follow us
            </Typography>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-3 mb-5'>
                  <Send/>
                  <Typography className='border-b border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 cursor-pointer'>
                     The JetBrains Academy blog
                  </Typography>
                
                </div>
                <div className='flex flex-row gap-3 mb-5'>
                    <Twitter/>
                    <Typography className='border-b border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 cursor-pointer'>
                    @JetBrains_Edu on Twitter
                    </Typography>
                </div>
                <div className='flex flex-row gap-3'>
                      <BugReportIcon/>
                      <Typography className='border-b border-neutral-300 hover:border-neutral-900 hover:text-neutral-900  cursor-pointer'>
                      Our bug and issue tracker
                      </Typography>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact