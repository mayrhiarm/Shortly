import React from 'react'
import Footer from './Footer'
import './Main.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const Main = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}

export default Main