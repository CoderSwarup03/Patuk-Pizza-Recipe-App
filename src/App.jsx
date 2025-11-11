import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Category from './pages/Category'
import BlogDetails from './pages/BlogDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/category' element={<Category />} />
        <Route path='/contact' element={<Contact />} />
        <Route path ='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App