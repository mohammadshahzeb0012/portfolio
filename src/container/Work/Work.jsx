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
    let data =    [
      {
        title: 'Jira Dashboard',
        description: 'This is a description for project one.',
        tags: ['Web App'],
        projectLink: 'https://mohammadshahzeb0012.github.io/task-management-system/',
        codeLink: 'https://github.com/mohammadshahzeb0012/task-management-system/settings/pages',
        image: '/project-images/tms.png'
      },
      {
        title: 'Image Editor Using JS',
        description: 'This is a description for project two.',
        tags: ['Web App'],
        projectLink: 'https://mohammadshahzeb0012.github.io/Image-Editor-Using-JS/',
        codeLink: 'https://github.com/mohammadshahzeb0012/Image-Editor-Using-JS',
        image: '/project-images/image-editor.png'
      },
      {
        title: 'Google Sheet',
        description: 'This is a description for project three.',
        tags: ['Web App'],
        projectLink: 'https://mohammadshahzeb0012.github.io/google-sheet/',
        codeLink: 'https://github.com/mohammadshahzeb0012/google-sheet',
        image: '/project-images/google-sheet.png'
      },
      {
        title: 'Travello',
        description: 'This is a description for project four.',
        tags: ['UI/UX'],
        projectLink: 'https://mohammadshahzeb0012.github.io/travello/',
        codeLink: 'https://github.com/mohammadshahzeb0012/travello',
        image: '/project-images/travello.png'
      },
      {
        title: 'EMS',
        description: 'This is a description for project three.',
        tags: ['Web App'],
        projectLink: 'https://mohammadshahzeb0012.github.io/employ-management-system/',
        codeLink: 'https://github.com/mohammadshahzeb0012/employ-management-system',
        image: '/project-images/ems.png'
      },
      {
        title: 'Persional Portfolio',
        description: 'This is a description for project three.',
        tags: ['React JS'],
        projectLink: 'https://portfolio-taupe-one-34.vercel.app/',
        codeLink: 'https://github.com/mohammadshahzeb0012/portfolio',
        image: '/project-images/portfolio.png'
      },
    ]
    setWorks([...data])
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