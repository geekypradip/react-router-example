import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from'./navbar.module.css'
function NavBar() {
  const [active ,setActive]=useState({
    home:true,
    contact:false,
    aboutUs:false,
    services:false,
    login:false
  })
  
  function handleActive(e){
    for (let key in active){
      // active[key]=false;
      console.log(key)
      if(e.target.name==key)
      setActive(active[key]=true)
      else
      setActive(active[key]=false)
    }
  
   console.log(active)
  }

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/" className={active.home?`${styles.navLink} ${styles.activeLink}`:`${styles.navLink}`} onClick={handleActive} name='home'>
          Home
        </Link>
        <Link to="/contact" className={active.contact?`${styles.navLink} ${styles.activeLink}`:`${styles.navLink}`} onClick={handleActive} name='contact'>Contact</Link>
        <Link to="/services" className={active.services?`${styles.navLink} ${styles.activeLink}`:`${styles.navLink}`} onClick={handleActive} name='services'>Services</Link>
        <Link to="/about-us" className={active.aboutUs?`${styles.navLink} ${styles.activeLink}`:`${styles.navLink}`} onClick={handleActive} name='aboutUs'>About Us</Link>
        <Link to="/login" className={active.login?`${styles.navLink} ${styles.activeLink}`:`${styles.navLink}`} onClick={handleActive} name='login'>Login</Link>
      </div>
    </>
  )
}

export default NavBar
