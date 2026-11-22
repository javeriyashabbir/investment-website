import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AboutUsPage from './pages/aboutUsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About2page from './pages/about2page'
import OpportunitiesPage from './pages/OppurnutitiesPage'

import FinanceProgramPage from './pages/FinanceProgrammePage'
import ServicesPage from './pages/ServicesPage'
import ContactUs from './pages/ContactUsPage'
import BlogPage from './pages/BlogPage'
import SingleBlogPage from './pages/singlebolg-page'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/'  element={<AboutUsPage/>}></Route>
  <Route path='*' element={<AboutUsPage/>}></Route>
  <Route path='/about2'  element={<About2page/>}></Route>
  <Route path='/opportunities'  element={<OpportunitiesPage/>}></Route>
  <Route path='/opportunities/financeProgram'  element={<FinanceProgramPage/>}></Route>
  <Route path='/services'  element={<ServicesPage/>}></Route>
  <Route path='/contactus'  element={<ContactUs/>}></Route>
  <Route path='/blog'  element={<BlogPage/>}></Route>
  <Route path='/singleblogPage'  element={<SingleBlogPage/>}></Route>
</Routes>
 


</BrowserRouter>


</>
  )
}

export default App
