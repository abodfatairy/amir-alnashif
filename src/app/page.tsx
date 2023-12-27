import React from 'react'
import Bz from './components/bz'
import HomePage from './components/homePage'
import About from './components/about'
import Work from './components/work'
import Achievement from './components/achievement'
type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <HomePage />
      <About />
      <Work />
      <Achievement />

    </div>
  )
}

export default page