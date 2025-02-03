import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      home
      <Link href='/learn'>
        Learn
      </Link>
    </div>
  )
}

export default page