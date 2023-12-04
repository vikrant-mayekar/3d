import React from 'react';
// logo
import LogoImg from '../img/absslogo.png';
// nike img
import women from '../img/women.png';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
    const handleButtonClick = () => {
        // Define the desired action to be performed when the button is clicked
        console.log('Button clicked!');
        window.open('https://wwww.google.com', 'testing', 'width=500,height=500');
      };
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const colors = [
        { value: '#185bca' },
        { value: '#272425' },
        { value: '#617453' },
        { value: '#f2c758' },
        { value: '#ffffff' },
    ];

    return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
        {/* card */}
        <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[426px] min-h-[600px] bg-[#e3e2df] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
        >

        {/* card logo */}
        <div className='mb-6'>
            <img src={LogoImg} alt='' />
        </div>

        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold'>Shatab Ali</h1>
        <h2 className= 'text-2xl mb-1 font-semibold'>Site - Head</h2>

        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
        I am passionate about empowering businesses to achieve their goals
        through strategic partnerships and innovative solutions. My experience and
        expertise have enabled me to guide numerous organizations on their journeys to
        success, fostering growth and enhancing their competitive edge.
        </p>


        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
            <button className='bg-[#617453] text-white text-base font-semibold py-[16px] px-[40px] rounded-lg' onClick={handleButtonClick}>
            Mail
            </button>
            <button className='bg-[#fff] text-black text-base font-semibold py-[16px] px-[40px] rounded-lg' onClick={handleButtonClick}>
            Linkedin
            </button>
        </div>


        {/* colors */}
        {/*<ul className='flex gap-x-[10px]'>
            {colors.map((color, index) => {
            return (
                <li
                key={index}
                style={{ backgroundColor: color.value }}
                className='w-8 h-8 rounded-full cursor-pointer'
                ></li>
            );
            })}b
        </ul>*/}

        <div className="flex gap-x-[10px]">
                <a href="https://www.facebook.com/S.Zain.Asif/" className="fa fa-facebook" aria-label="Facebook"></a>
                <a href="https://www.instagram.com/zain._.asif/" className="fa fa-instagram" aria-label="Instagram"></a>
                <a href="https://github.com/ZainAsif767" className="fa fa-github" aria-label="Github"></a>
                <a href="https://twitter.com/comeflywithme92" className="fa fa-twitter" aria-label="Twitter"></a>
        </div>


        {/* card image 
        <motion.div style={{ x, y, rotateX, rotateY, z: 100000 }} className='absolute top-12 -right-64 w-[620px]'>
            <img src={women} alt='' draggable='false' />
        </motion.div>*/}
        </motion.div>
    </div>
    );
};

export default Card;
