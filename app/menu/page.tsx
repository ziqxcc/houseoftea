import React from 'react'
import Header from './Heder'
import Sidebar from './Menu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - House of Tea',
  icons: {
    icon: '/assets/logo.png',
  },
}

function page() {
  return (
    <div>
      <Header/>
      <Sidebar/>
    </div>
  )
}

export default page
