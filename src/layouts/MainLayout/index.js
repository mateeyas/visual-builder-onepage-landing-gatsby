import React from "react"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-alice-carousel/lib/alice-carousel.css"
import "@/styles/style.scss"

export default ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  )
}
