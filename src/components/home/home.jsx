import React from 'react'
import Banner from '../banner/banner'
import Card from '../card/card'
import Asientos from '../asientos/Asientos'


function Home() {
  return (
    <>
    <div className='header'>

    </div>

    <div className='banner'>
      <Banner />
    </div>

    <div className='main'>
      {/* <Card /> */}
      <Asientos />
    </div>
   
    </>
  )
}

export default Home