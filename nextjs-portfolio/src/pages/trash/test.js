import React from 'react'
import StarBg from './components/StarBg'
import Parallax from './components/Parallax'

function test() {
  console.log("hi")
  return (
    <div className='relative scroll-smooth'>
      <Parallax src="/images/spacebg4.png"  yOffset={-400} />
      <Parallax src="/images/spacebg1.png"  yOffset={-100} />
      <Parallax src="/images/spacebg2.png"  yOffset={-200} />
      <Parallax src="/images/spacebg3.png"  yOffset={-300} />
      
        </div>
  )
}

export default test;