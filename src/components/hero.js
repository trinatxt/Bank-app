import React from 'react';

const Hero = () => {
    return (
        <div className='w-full h-[70vh] relative'>
            <img className='top-0 left-0 w-full h-full object-cover' src="https://www.capitaland.com/content/dam/capitaland-sites/capitastar/5Apr_CSxKF_Conversion_WebsiteTile982x818.jpg.transform/cap-midres/image.jpg" />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-full' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            </div>
        </div>
    );
}

export default Hero;
