import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GitHub, Linkedin, Instagram, Mail } from 'react-feather';

const Footer = () => {
  return (
    <footer className="my-8 text-xs sm:text-sm">
      <div className="flex flex-col justify-center items-center">
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON SIDE OVER 768PX SCRN RES */}
      <div className="hidden md:block fixed top-[35%] z-10">
        <ul className="list-none flex flex-col">
          <motion.li initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 2 }} viewport={{ once: true }} className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-800 hover:text-slate-400" href="https://www.linkedin.com/in/deepthinv/" target="_blank"><Linkedin size={30} /></a></motion.li>
          <motion.li initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 2.5 }} viewport={{ once: true }} className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-800 hover:text-slate-400" href="mailto:dn292@cornell.edu"><Mail size={30} /></a></motion.li>
        </ul>
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON BOTTOM UNDER 768PX SCRN RES */}
      <div>
        <ul className="md:hidden flex flex-row justify-center">
          <li className="p-3 inline-flex"><a className="text-gray-800 hover:text-slate-400 hover:border-0" href="https://www.linkedin.com/in/deepthinv/" target="_blank"><Linkedin size={24} /></a></li>
          <li className="p-3 inline-flex"><a className="text-gray-800 hover:text-slate-400 hover:border-0" href="mailto:dn292@cornell.edu"><Mail size={24} /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;