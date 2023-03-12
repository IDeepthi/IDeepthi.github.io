import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../assets/Me.png';

const About = () => {
  return (
    <div id="about" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0">
          <motion.img
            src={AboutImg}
            className="shadow-lg rounded-full"
            alt="Hi, I'm Deepthi!"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            viewport={{ once: true }}
          />
        </div>
        <div>
          <motion.p
            className="pb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
          >
           <b>Cornell University</b><br />
           Graduation: May 2023<br />
           Degree: Master's in Engineering Management<br />
           <br/>
           <b>The National Institute of Engineering</b><br />
           Graduation: June 2020<br />
           Degree: Bachelor of Engineering, Computer Science<br />
           </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            viewport={{ once: true }}
          >
            When I'm not studying or working, I'm most likely playing badminton or sketching a mandala!
            Fun fact about me: I am a National level badminton player!
            </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;