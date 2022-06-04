import { useState } from 'react'
import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
//Components
import { MainPage } from "./pages/mainPage/MainPage"
import { VideoPage } from "./pages/videoPage/VideoPage"
function App() {
  return (
    <Routes>
      <Route  path="/" element= {<MainPage/>}></Route>
      <Route  path="/videos/:tag" element= {<VideoPage/>}></Route>
    </Routes>
  )
}

export default App
