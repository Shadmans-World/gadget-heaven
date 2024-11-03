import React from 'react';
import bannerPhoto from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='relative bg-customPurple h-[600px] rounded-b-xl mb-[18rem]'>
            <div className='flex w-[70%] mx-auto flex-col gap-y-5 justify-center text-center text-white '>
                <h3 className='text-[56px] font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='bg-white p-3 w-max text-customPurple mx-auto rounded-xl text-[20px] font-bold'>Shop Now</button>
            </div>
            <div className='absolute w-[70%] h-[500px] border p-3 top-[60%] left-1/2 -translate-x-1/2 rounded-xl backdrop-blur-3xl'>
                <img className='w-full h-full rounded-xl object-cover' src={bannerPhoto} alt="" />
            </div>
        </div>
    );
};

export default Banner;