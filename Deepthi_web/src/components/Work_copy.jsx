import React from 'react';
import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2023,
    title: 'Product Manager Consultant',
    company: 'CFCU Community Credit Union',
    duration: 'Jan 2023 - May 2023',
    details: 'Building a Personal Financial Management System from Ideation to Execution, as part of my capstone project.'
  },
  {
    year: 2023,
    title: 'Product Manager Intern',
    company: 'ExoPower',
    duration: 'Dec 2022 - Jan 2023',
    details: 'Performed Competitors Study and prioritized features for MVP, and came up with a Go-to-Market Startegy.'
  },
  {
    year: "2021 - 2022",
    title: 'Consulting Engineer II',
    company: 'Cisco',
    duration: 'Aug 2021 - Aug 2022',
    details: "Led multiple high impact global projects for one of the largest banking institutions from planning to execution."
  },
  {
    year: "2020 - 2021",
    title: 'Consulting Engineer I',
    company: 'Cisco',
    duration: 'Aug 2020 - Aug 2021',
    details: "Led multiple projects for Cisco Collaboration IP telephony department that involved working with cross-funtional teams. "
  },
  {
    year: 2020,
    title: 'Technical Consulting Intern',
    company: 'Cisco',
    duration: 'Jan 2020 - July 2020',
    details: "Developed a software product by re-architecting to improve business operations."
  },
  {
    year: 2019,
    title: 'Software Engineering Intern',
    company: 'Prixgen Infotech Solutions',
    duration: 'June 2019 - July 2019',
    details: "Developed a real time face detection system to track people's movement in a large factory."
    
  },
  {
    year: 2018,
    title: 'Software Engineering Intern',
    company: 'Cluster Foundary',
    duration: 'June 2018 - July 2018',
    details: "Built a facial detection tool using OpenCV"
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-screen-md m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      {data.map((item, i) => (
        <WorkItem
          key={i}
          year={item.year}
          title={item.title}
          company={item.company}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;