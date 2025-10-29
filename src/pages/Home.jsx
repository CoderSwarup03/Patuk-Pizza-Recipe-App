import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WeaklyOffer from '../components/WeaklyOffer'
import FoodAllList from '../components/FoodAllList'
import CartList from '../components/CartList'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WeaklyOffer />
      <FoodAllList />
      <CartList />
    </>

  )
}

export default Home