import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";




function App() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
        setClick(!click)
    }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && click) {
        setClick(false)
      }
    }

    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <BrowserRouter>
    <NavBar handleClick={handleClick} />
    <Dropdown handleClick={handleClick} click={click}/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
