import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Skills.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Skills = () => {
  const [experiences, setExperiences] = useState([]);

  const [skills, setSkills] = useState([
    { name: 'React', bgColor: 'green', icon: '/assets/react.png' },
    { name: 'HTML', bgColor: 'orange', icon: '/assets/html.png' },
    { name: 'CSS', bgColor: 'blue', icon:'assets/css.png' },

    { name: 'JavaScript', bgColor: 'yellow', icon: '/assets/javascript.png' },
    { name: 'Node.js', bgColor: 'lightgreen', icon: '/assets/node.png' },

    // { name: 'Express', bgColor: 'lightcoral', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Expressjs.png' },
    // { name: 'MongoDB', bgColor: 'lightseagreen', icon: 'https://www.vectorlogo.zone/logos/mongodb/ mongodb-icon.svg' },
    // { name: 'Tailwind CSS', bgColor: 'purple', icon: 'https://tailwindcss.com/favicon.ico' },
    // { name: 'Sass', bgColor: 'pink', icon: 'https://sass-lang.com/assets/img/logos/logo-1e4c9c5c.png' }
  ]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container" id='skills'>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
           {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} 
        </div>
      </div>
    </>
  );
};

export default Skills