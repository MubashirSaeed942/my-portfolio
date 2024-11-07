
import About from '@/myComponent/About/About'
import Contact from '@/myComponent/Contact/Contact'
import Hero from '@/myComponent/Hero/Hero'
import MyProjects from '@/myComponent/Myprojects/MyProjects'
import Skills from '@/myComponent/Skills/Skills'
import React from 'react'

export default function Homepage() {
  return (
    <div>
      <Hero/>
      <MyProjects/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

