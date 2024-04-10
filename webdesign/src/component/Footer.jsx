import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=' flex flex-col items-start gap-4 bg-white vsm:flex-wrap vsm:gap-2 xs:items-center
     xl:items-start lg:items-start' style={{boxShadow:'0 -4px 6px -1px rgba(0, 0, 0, 0.1)'}} >
        
        <div className='  flex items-center gap-8 p-5 vsm:flex-wrap vsm:gap-4 vsm:items-center vsm:justify-center vsm:text-sm lg:text-lg 
        xs:text-xs xs:gap-3 xs:p-2 xs:flex-wrap'>
            <img src="https://cdn.shopify.com/s/files/1/0388/3771/4989/files/PAYPAL_LOGO_480x480.png?v=1650301781"
            className=' w-28 mx-20 vsm:w-20 vsm:mx-24 xs:mx-0 xs:w-10'/>
            <a href="#">Help</a>
            <a href="#">Contact Us</a>
            <a href="#">Security</a>
            <a href="#">Fees</a>
        </div>
        <div className='w-full flex lg:items-start border-t shadow-inner pt-5'>
        <div className=' flex gap-7 vsm:flex-wrap vsm:justify-center 
        vsm:text-sm vsm:p-4 lg:text-lg xs:p-1 xs:text-xs xs:gap-4 xs:flex-wrap xl:float-left xl:pl-24 
         lg:items-start lg:gap-9 lg:pl-10'>
            <span className=' mx-20 text-gray-600 vsm:text-xs vsm:mx-3 xs:mx-0 xs:text-xs'>1994-2022 PayPal Inc All right reserved</span>
            <a href="#">Privacy</a>
            <a href="#">Legal</a>
            <a href="#">Policy Update</a>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer