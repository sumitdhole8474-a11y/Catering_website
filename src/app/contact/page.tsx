import React from 'react'
import ContactHero from '@/components/ContactHero'
import ContactCTA from '@/components/ContactCTA'
import ContactForm from '@/components/ContactForm'
function page() {
  return (
    <div>
      <ContactHero/>
      <ContactCTA/>
      <ContactForm/>
    </div>
  )
}

export default page