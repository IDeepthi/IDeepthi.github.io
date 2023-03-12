import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, AtSign, GitHub, Globe, ChevronsRight } from 'react-feather';

import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const formId = '781566e2-173f-4f45-ad90-5e701ce26a67';
  const formUrl = 'https://getform.io/f/' + formId;

  // handles form validation
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // error message for invalid email
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div id="contact" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <div>
          <p>
            Please feel free to reach out with any questions or opportunities. I look forward to hearing from you!
          </p>

          <div className="max-w-[90%] w-full mx-auto py-8 grid grid-cols-2 gap-2 sm:gap-4">
            
            
            <div className="inline-flex items-center">
              <AtSign className="text-slate-400" size={22} />&nbsp;E-mail
            </div>
            <div className="inline-flex justify-end items-center">
              :&nbsp;<a href="mailto:dn292@cornell.edu" className="text-slate-400 hover:text-slate-700">dn292@cornell.edu</a>
            </div>
            
            <div className="inline-flex items-center">
              <Globe className="text-slate-400" size={22} />&nbsp;Languages
            </div>
            <div className="inline-flex justify-end items-center">
              : English, Hindi
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div>
          <form method="POST" action={formUrl} id="contact-form" className="flex flex-col justify-center max-w-[600px] mx-auto w-full">
            <div class="w-full mx-auto">
              <label className="block font-['Source_Code_Pro'] font-medium">
                Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                className="w-full my-2 p-2 rounded bg-stone-100 border border-gray-300"
              />

              <label className="block font-['Source_Code_Pro'] font-medium">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                className="w-full my-2 p-2 rounded bg-stone-100 border border-gray-300" />

              <label className="block font-['Source_Code_Pro'] font-medium">
                Message:
              </label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="4"
                className="w-full my-2 p-2 rounded bg-stone-100 border border-gray-300"
              />

              {errorMessage && (
                <div>
                  <p className="font-['Source_Code_pro'] tracking-tight text-xs">{errorMessage}</p>
                </div>
              )}
              <button type="submit" className="group w-[120px]">
                Submit
                <span className="group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </div>
          </form>
        </div>
    </motion.div>
  </div>
  );
};

export default Contact;