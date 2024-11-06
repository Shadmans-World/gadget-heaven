import React from 'react';
import bannerPhoto from '../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate()
    const handleNavigateDashboard = () =>{
        navigate('/dashboard')
    }
    return (
        <div className='relative bg-customPurple h-[600px] rounded-b-xl mb-[7rem] md:mb-[18rem]'>
            <div className='flex md:w-[70%] p-3 md:p-0 mx-auto flex-col gap-y-5 justify-center text-center text-white pt-5'>
                <h3 className='text-[30px] lg:text-[56px] font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button onClick={handleNavigateDashboard} className='bg-white p-3 w-max text-customPurple mx-auto rounded-xl text-[20px] font-bold'>Shop Now</button>
            </div>
            <div className='absolute w-[70%] md:h-[500px] border p-3 md:top-[60%] left-1/2 -translate-x-1/2 rounded-xl backdrop-blur-3xl'>
                <img className='w-full h-full rounded-xl object-cover' src={bannerPhoto} alt="" />
            </div>
        </div>
    );
};

export default Banner;