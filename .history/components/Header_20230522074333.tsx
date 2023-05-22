import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='relative cursor-pointer opacity-75 w-fit'>
            <Image src="https://www.freeiconspng.com/uploads/apple-icon-4.png" width={50} height={50} alt=''  /> 
        </div>

    </header>
  )
}

export default Header;