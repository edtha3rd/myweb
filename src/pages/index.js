import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

//import shared layout
import Layout from '../components/Layout'

//import routes
import Home from './home'
import About from './about'
import Writings from './writings'
import QuickView from './quickview'
import PostPage from './post'
import Projects from './projects'
import SignUp from './signup'
import SignIn from './signin'

//define routes
const Pages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="writings" element={<Writings />}></Route>
          <Route path="quickview" element={<QuickView />}></Route>
          <Route path="post/:slug" element={<PostPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path='projects' element={<Projects />}></Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default Pages
