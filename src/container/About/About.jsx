import React from 'react'
import { motion } from 'framer-motion';
import './About.scss';
import { useEffect, useState } from 'react';




const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    setAbouts([
      {
        title: 'Full Stack Developer',
        description: `I am a passionate and dedicated full-stack developer with a strong foundation in web technologies, including HTML, CSS, and JavaScript. Proficient in React for building dynamic user interfaces, I also have experience with Node.js and Express for server-side development. My skills extend to MongoDB for database management, allowing me to create efficient and scalable applications.
I thrive in collaborative environments and enjoy tackling challenges that involve both front-end and back-end development. Eager to contribute my skills to innovative projects, I am committed to continuous learning and growth in the ever-evolving tech landscape.`
      }
    ])
  }, [])


  return (
    <>
      <h2 className="head-text">I Know that <span>Good Developement</span> <br />means  <span>Good Business</span></h2>
      <div className="app__profiles" id='about'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <h2 className="bold-text" style={{ marginTop: 20 ,fontSize: '2.75rem',margin: 'auto'}}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 ,textAlign: 'center'}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About