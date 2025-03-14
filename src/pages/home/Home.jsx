import React from 'react'
import {ApartmentsGrid, Banner} from '../../components'
import homePicture from '../../assets/homepicture.png'


export function Home() {
  return (
    <div>
      <Banner title={"Partout chez vous"} imageBackground={homePicture}/>
      <ApartmentsGrid />
    </div>
  )
}