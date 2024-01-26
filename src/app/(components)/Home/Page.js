import React from 'react'
import HomePage from './HomePage/Page'
import Services from './Services/Page'
import AlbumCard from './AlbumCard/Page'
import PortFolio from './Portfolio/Page'
import FindOutMe from './FindOutMe/page'

const Home = () => {
  return (
    <div>
        <HomePage/>
        <Services/>
        <AlbumCard/>
        <PortFolio/>
        <FindOutMe/>
    </div>
  )
}

export default Home