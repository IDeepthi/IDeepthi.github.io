import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitHub } from 'react-feather';


 const projects = [
 
  /*{
    title: 'Trip Tide',
    thumbnail: TripTideImg,
    description: 'A MERN + GraphQL stack travel application intended to be a one-stop shop for travel enthusiasts. Users can discuss all-things travel.',
    technologies: 'MongoDB / ExpressJS / ReactJS / NodeJS',
    url: 'https://trip-tide.herokuapp.com/',
    github: 'https://github.com/demivlkv/trip-tide'
  },
  {
    title: 'Weather Dashboard',
    thumbnail: WeatherImg,
    description: 'A weather dashboard application built with OpenWeather API',
    technologies: 'ReactJS / TypeScript / Tailwind CSS',
    url: 'https://creative-gaufre-7a5162.netlify.app/',
    github: 'https://github.com/demivlkv/weather-dashboard'
  },
  {
    title: 'Sound Stream',
    thumbnail: SoundStreamImg,
    description: 'A simple Spotify clone',
    technologies: 'ReactJS / ExpressJS / Tailwind CSS / Spotify API',
    url: 'https://soundstream.herokuapp.com/',
    github: 'https://github.com/demivlkv/soundstream'
  },
  {
    title: 'Tokio Ramen',
    thumbnail: TokioImg,
    description: 'A freelance project to revamp the website of Tokio Ramen - a local ramen business in Boynton Beach, FL',
    technologies: 'GatsbyJS / Contentful / GraphQL / Tailwind CSS',
    url: 'https://tokio-ramen.netlify.app/',
    github: 'https://github.com/demivlkv/tokio-ramen'
  },
  {
    title: 'Book Nook v2',
    thumbnail: BookNookv2Img,
    description: 'A collaborative project to build a MERN stack social media site based off the original Book Nook project',
    technologies: 'MongoDB / ExpressJS / ReactJS / NodeJS',
    url: 'https://book-nook-v2.herokuapp.com/',
    github: 'https://github.com/demivlkv/book-nook-v2'
  },
  {
      title: 'Book Nook v1',
      thumbnail: BookNookv1Img,
      description: 'A collaborative effort to provide a platform for all parents to discuss books for their young readers',
      technologies: 'JavaScript / HandlebarsJS / NodeJS / MySQL',
      url: 'https://booknook-stars.herokuapp.com/',
      github: 'https://github.com/demivlkv/book-nook'
  },
  {
    title: 'Tech Blog',
    thumbnail: TechBlogImg,
    description: 'A full-stack CMS-style blog site where users can create an account, publish articles, blog posts, & thoughts',
    technologies: 'JavaScript / NodeJS / MySQL',
    url: 'https://frozen-sierra-30429.herokuapp.com/',
    github: 'https://github.com/demivlkv/tech-blog'
  },
  {
    title: 'Find-A-Story',
    thumbnail: FindAStoryImg,
    description: 'A collaborative project to develop a media database application using the Open Movie Database API & Google Books API',
    technologies: 'JavaScript / jQuery /  HTML / CSS',
    url: 'https://demivlkv.github.io/Find-A-Story',
    github: 'https://github.com/demivlkv/Find-A-Story'
  }*/
];

const animateProject = {
  hidden: { opacity: 0, y: 50 },
  animate: {
      opacity: 1, 
      y: 0,
      transition: {
          delay: 0.75,
          duration: 0.4,
          type: 'tween',
          delayChildren: 0.5,
          staggerChildren: 0.4
      }
  }
};

const animateProjectItem = {
  hidden: { opacity: 0, y: 50 },
  animate: { 
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.4,
          type: 'tween'
      }
  }
};

const Project = () => {
  return (
    <motion.div
      className="w-full grid md:grid-cols-2 gap-8"
      variants={animateProject}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.div
          key={project}
          className="relative group"
          variants={animateProjectItem}
          viewport={{ once: true }}
        >
          <div className="w-full h-max aspect-auto overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-all shadow-lg cursor-pointer">
    
            <img src={project.thumbnail} alt={project.title} className="w-full" />
    
            <div className="flex rounded-lg justify-center items-center transition-all duration-700 opacity-0 bg-gradient-to-t from-[#222222] via-slate-600 to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full">
                            
              <div class="absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                <div class="flex-row text-center p-6">
                  <h3 className="mb-2 font-semibold text-sky-200 text-2xl uppercase drop-shadow-md tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm tracking-tight leading-snug drop-shadow-md">
                    {project.description}
                  </p>
                  <p className="font-['Source_Code_Pro'] text-sky-200 text-xs py-2">
                    {project.technologies}
                  </p>
                  <div className="text-center">
                    <a href={project.url} target="_blank">
                      <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-slate-500 hover:bg-white text-white hover:text-slate-800 transition-all ease-in duration-300"><ExternalLink size={20} /></button>
                    </a>
                    <a href={project.github} target="_blank">
                      <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-slate-500 hover:bg-white text-white hover:text-slate-800 transition-all ease-in duration-300"><GitHub size={20} /></button>
                    </a>
                  </div>
                </div>
              </div>   
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Project;