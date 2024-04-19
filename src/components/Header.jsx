import React from "react"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className=" ">
      <div className=" w-[100vw] flex justify-center items-center relative h-[100vh] bg-[url('../images/background.jpg')] bg-cover bg-center bg-no-repeat ">
        <Navbar />
      </div>
    </div>
  )
}

export default Header
