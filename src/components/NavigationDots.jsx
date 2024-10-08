import React from 'react'
    
const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
         <a href={`#${item}`}
         key={item + index}
         className="app__avigation-dot"
         style={active === item ? {background: '#313BAC'} : { }}
        />       
      ))
      }
    </div>
  )
}

export default NavigationDots


{/* <div className='app__navigation'>
{['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (

        <a href={`#${item}`}
        key={item + index}
        className="app__avigation-dot"
        style={active === item ? {background: '#313bac'} : { }}
       /> */}
