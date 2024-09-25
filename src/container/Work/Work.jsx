import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import './Work.css';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  useEffect(()=>{
    // { name: 'React', bgColor: 'green', icon: '/assets/react.png' },
    // { name: 'HTML', bgColor: 'orange', icon: '/assets/html.png' },
    // { name: 'CSS', bgColor: 'blue', icon:'assets/css.png' },

    // { name: 'JavaScript', bgColor: 'yellow', icon: '/assets/javascript.png' },
    // { name: 'Node.js', bgColor: 'lightgreen', icon: '/assets/node.png' },


    let data =    [
      {
        title: 'Project One',
        description: 'This is a description for project one.',
        tags: ['Web App', 'React JS'],
        projectLink: 'https://example.com/project-one',
        codeLink: 'https://github.com/example/project-one',
        image: '/assets/node.png'
      },
      {
        title: 'Project Two',
        description: 'This is a description for project two.',
        tags: ['UI/UX', 'Mobile App'],
        projectLink: 'https://example.com/project-two',
        codeLink: 'https://github.com/example/project-two',
        image: '/assets/node.png'
      },
      {
        title: 'Project Three',
        description: 'This is a description for project three.',
        tags: ['Web App', 'React JS'],
        projectLink: 'https://example.com/project-three',
        codeLink: 'https://github.com/example/project-three',
        image: '/assets/node.png'
      },
      {
        title: 'Project Four',
        description: 'This is a description for project four.',
        tags: ['Mobile App'],
        projectLink: 'https://example.com/project-four',
        codeLink: 'https://github.com/example/project-four',
        image: '/assets/node.png'
      },
      {
        title: 'Project Three',
        description: 'This is a description for project three.',
        tags: ['Web App', 'React JS'],
        projectLink: 'https://example.com/project-three',
        codeLink: 'https://github.com/example/project-three',
        image: '/assets/node.png'
      },
      {
        title: 'Project Four',
        description: 'This is a description for project four.',
        tags: ['Mobile App'],
        projectLink: 'https://example.com/project-four',
        codeLink: 'https://github.com/example/project-four',
        image: '/assets/node.png'
      }
    ]
    setFilterWork([...data])
  },[])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
      
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.image} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
               <h4 className="bold-text">{work.title}</h4>
               <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

               <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
               </div>
             </div>
           </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work