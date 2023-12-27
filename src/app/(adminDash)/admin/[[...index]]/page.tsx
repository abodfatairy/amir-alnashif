"use client"
import { NextStudio } from 'next-sanity/studio'
import React from 'react'
import config from '../../../../../sanity.config'

// type Props = {}

const page = () => {
  return (
    <NextStudio config={config}/>
  )
}

export default page