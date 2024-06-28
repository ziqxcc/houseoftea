import React from 'react'
import Header from './Header'
import Details from './Details'
import Form from './Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - House of Tea',
  icons: {
    icon: '/assets/logo.png',
  },
}

function page() {
  return (
    <div>
      <Header/>
      <Details/>
      <Form/>
    </div>
  )
}

export default page
