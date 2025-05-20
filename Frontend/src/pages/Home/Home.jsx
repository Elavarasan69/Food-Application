import React, { useState } from 'react'
import './Home.css'
import Header from '../../comonents/Header/Header'
import ExploreMenu from '../../comonents/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../comonents/FoodDIsplay/FoodDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home