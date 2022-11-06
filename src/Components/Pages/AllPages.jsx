import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Information from './Information'
// eslint-disable-next-line no-unused-vars
import { Route, Routes, useLocation } from 'react-router-dom'
import Search from './Search'
import { AnimatePresence } from 'framer-motion'

function AllPages() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:searchitem' element={<Search />} />
        <Route path='/recipe/:name' element={<Information />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AllPages