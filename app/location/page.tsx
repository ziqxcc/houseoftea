import React from 'react'
import Header from './Header'
import CustomSlider from './CustomSlider'
import Outlets from './Outlets'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outlets - House of Tea',
  icons: {
    icon: '/assets/logo.png',
  },
}

function page() {
  return (
    <div>
      <Header/>
      <CustomSlider /><Outlets/>
    </div>
  )
}

export default page
