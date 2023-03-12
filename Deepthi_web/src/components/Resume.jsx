import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsRight, FastForward } from 'react-feather';
import TigerImg from '../assets/myImg.png';

const Resume = () => {
  const icon = <FastForward className="inline-flex justify-center items-center pb-1 text-slate-400" size={15} />

  return (
    <div id="resume" className="relative w-full h-screen">
      <motion.img
        className="w-full h-screen object-contain object-left-bottom lg:object-cover lg:object-left"
        src={TigerImg}
        alt="Sketch of a tiger"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-stone-100/60">
        <div className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.h2>
          <motion.div
            className="mb-12 flex flex-col justify-center items-center w-full h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            viewport={{ once: true }}
          >
            <a href="public/Deepthi_NV_Resume.pdf">
              <button type="submit" className="group w-[160px]">
                Download Resume
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </a>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.div
            className="w-full sm:w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            viewport={{ once: true }}
          >
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Data Analysis</h3>
              {icon} Python<br />
              {icon} MySQL<br />
              {icon} SPSS<br />
              {icon} R <br />
              

              
            </div>
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Product Skills</h3>
              {icon} Figma<br />
              {icon} Agile<br />
              {icon} Storyboarding<br />
              {icon} Roadmapping<br />
              {icon} Wireframings<br />
              {icon} Strategic planning<br />
              {icon} Design Thinking<br />
              {icon} Product Design<br />
              {icon} GtM Strategy<br />
              {icon} User Journey<br />
              
            </div>
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Documentation</h3>
                
              {icon} Microsoft Office<br />
              {icon} Jira<br />
              {icon} Git<br />
              
              

            </div>
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Certifications</h3>
              {icon} Cisco Certified Network Associate<br />
              {icon} Cisco DevNet Associate<br />

             
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;