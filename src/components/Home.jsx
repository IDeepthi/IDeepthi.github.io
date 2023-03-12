import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronsRight } from 'react-feather';
import DragonImg from '../assets/dragon.png';

const Home = () => {
  return (
    <div id="main" className="w-full h-screen">
      <motion.img
        className="w-full h-screen flex object-contain object-top md:object-cover md:object-center lg:object-right"
        src={DragonImg}
        alt="Sketch of a dragon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <div className="w-full h-screen absolute top-[70px] left-0 bg-stone-100/50">
        <div className="max-w-screen-md w-full h-full m-auto md:ml-20 lg:ml-48 px-8 flex flex-col justify-center items-start">
          <motion.h3
            className="font-medium text-gray-500 lg:text-gray-100 text-lg sm:text-2xl tracking-tight lg:mix-blend-exclusion"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hello there, I'm
          </motion.h3>
          <motion.h1
            className="pt-1 font-semibold text-4xl sm:text-5xl text-gray-800 lg:text-gray-300 tracking-tighter lg:mix-blend-exclusion"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
          >
            Deepthi Nandroli Vishwanatha
          </motion.h1>
          <motion.h3
            className="font-['Source_Code_Pro'] flex pt-4 text-gray-800 lg:text-gray-300 text-2xl sm:text-3xl lg:mix-blend-exclusion"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            
            <TypeAnimation
              sequence={[
                'An Aspiring Product Manager',
                2000, // waits 2s
                'A Tech Enthusiast',
                2000,
                'A Data Nerd',
                2000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '14px' }}
            />
          </motion.h3>
          <motion.p
            className="py-4 max-w-[500px] lg:text-gray-300 lg:mix-blend-exclusion"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            viewport={{ once: true }}
          >
            I am a Graduate Student at Cornell University. I am pursuing my master's degree in Engineering Management. I love to build pervasive products!
          </motion.p>
          <motion.div
            className="w-full flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <a href="public/Deepthi_NV_Resume.pdf">
              <button type="submit" className="group w-[160px]">
                Resume
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;