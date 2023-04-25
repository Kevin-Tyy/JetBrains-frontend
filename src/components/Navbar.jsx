import React from 'react'
import Logo from './Logo'
import { Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TranslateIcon from '@mui/icons-material/Translate';import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <div className='flex text-white justify-between bg-neutral-800 items-center lg:justify-around'>
        <Logo/>
        <Typography variant='h6' sx={{fontSize: '17px'}} className='lg:hidden'>
          JetBrains Academy
        </Typography>
        <div className='lg:flex items-center gap-6 hidden'>
            <Typography variant='body1' className='text-gray-400 cursor-pointer hover:text-white'>
                Developer Tools
            </Typography>
            <Typography variant='body1'  className='text-gray-400  cursor-pointer hover:text-white'>
                Teams Tools
            </Typography>
            <Typography variant='body1'  className='text-gray-400 cursor-pointer hover:text-white'> 
                Education
            </Typography>
            <Typography variant='body1'  className='text-gray-400 cursor-pointer hover:text-white'>
                Solutions
            </Typography>
            <Typography variant='body1'  className='text-gray-400 cursor-pointer hover:text-white'>
                Support
            </Typography>
            <Typography variant='body1'  className='text-gray-400 cursor-pointer hover:text-white'>
                Store
            </Typography>
            <SearchIcon fontSize='large' sx={{ p: '5px'}} className='hover:text-white cursor-pointer text-gray-400 hover:bg-neutral-700 rounded-full'/>
            <PersonIcon fontSize='large'  sx={{ p: '5px'}} className='hover:text-white cursor-pointer text-gray-400 hover:bg-neutral-700 rounded-full '/>
            <ShoppingCartIcon fontSize='large' sx={{ p: '5px'}} className='hover:text-white cursor-pointer text-gray-400 hover:bg-neutral-700 rounded-full '/>
            <TranslateIcon fontSize='large'  sx={{p: '5px'}} className='hover:text-white cursor-pointer text-gray-400 hover:bg-neutral-700 rounded-full '/>

        </div>
        <div className='lg:hidden'>
             <SearchIcon fontSize='large'  sx={{ p: '5px'}}className='hover:text-white cursor-pointer text-gray-400 hover:bg-neutral-700 rounded-full'/>
             <MenuIcon fontSize='large' sx={{ p: '5px'}} className='hover:text-white cursor-pointer text-gray-400 hover:bg-neutral-700 rounded-full'/>

        </div>
    </div>
  )
}

export default Navbar