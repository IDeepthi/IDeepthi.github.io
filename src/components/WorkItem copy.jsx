import React from 'react';
import { motion } from 'framer-motion';

const animateWorkSection = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: 'tween',
      delayChildren: 0.25,
      staggerChildren: 0.3
    }
  }
};

const WorkItem = ({ year, title, company, duration, details }) => {
  return (
    <motion.ol
      className="flex flex-col md:flex-row relative border-l border-stone-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.li className="mb-10 ml-4"
        variants={animateWorkSection}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute mt-1.5 -left-1.5 w-3 h-3 bg-stone-300 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.75 }}
          viewport={{ once: true }}
        />

        <p className="flex flex-wrap flex-row justify-start items-center text-xs md:text-sm">
          <span className="inline-block py-1 px-2 mr-4 font-medium text-white bg-gray-600 rounded-md">{year}</span>
          <span className="mr-1 text-base md:text-lg font-medium">{title}</span>
          @ <span className="ml-1 text-base md:text-lg font-medium text-slate-400">{company}</span>
        </p>

        <p className="mt-3 text-xs sm:text-sm font-normal text-stone-400">
          {duration}
        </p>
        <p className="my-2 font-normal">
          {details}
        </p>
      </motion.li>
    </motion.ol>
  );
};

export default WorkItem;