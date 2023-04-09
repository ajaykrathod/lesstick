import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

    useEffect(() => {
        document.getElementById("profile")?.classList.remove('active')
        document.getElementById("login")?.classList.remove('active')
        document.getElementById("signup")?.classList.remove('active')
    },[])

    const handleClick = (id) => {
        document.getElementById("home")?.classList.remove('active')
        document.getElementById("profile")?.classList.remove('active')
        document.getElementById("login")?.classList.remove('active')
        document.getElementById("signup")?.classList.remove('active')
        document.getElementById(id)?.classList.add('active')
        setTimeout(() => {
          if(document.getElementById("nav")?.classList.contains("active")){
            document.getElementById("nav")?.classList.remove("active")
          }
        }, 500);
      }
    
      const handleTitleClick = () => {
        window.location.href = "/"
      }
    
      const handleHamburger = () => {
          if(document.getElementById("nav")?.classList.contains("active")){
            document.getElementById("nav")?.classList.remove("active")
            let container = document.getElementById("container")
            if(container){
              container.style.zIndex = "1"
            } 
          }
          else{
            document.getElementById("nav")?.classList.add("active");
            let container = document.getElementById("container")
            if(container){
              container.style.zIndex = "-1"
            } 
          }
      }
  return (
    <nav id="nav">
        <div className="hidden">
            <h2 className="title" onClick={handleTitleClick}>
            LessTick
            </h2>
            <div onClick={handleHamburger} id="hamburger" className="hamburger">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
            </div>
        </div>
        <ul>
            <li>
            <NavLink onClick={() => handleClick('home')} id="home" to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink onClick={() => handleClick('profile')} id="profile" to="/profile">Profile</NavLink>
            </li>
            <li>
            <NavLink onClick={() => handleClick('login')} id="login" to="/login">Login</NavLink>
            </li>
            <li>
            <NavLink onClick={() => handleClick('signup')} id="signup" to="/signup">SignUp</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar