import React, { useEffect } from "react"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"

export default ({ children }) => {
  useEffect(() => {
    // swith dark theme
    let theme = window.localStorage.getItem("data-kit-theme") || ""
    document.querySelector("html").setAttribute("data-kit-theme", theme)

    document.addEventListener("dblclick", function () {
      let attr = document.querySelector("html").getAttribute("data-kit-theme")
      if (attr === "dark") {
        document.querySelector("html").setAttribute("data-kit-theme", "")
        window.localStorage.setItem("data-kit-theme", "")
      } else {
        document.querySelector("html").setAttribute("data-kit-theme", "dark")
        window.localStorage.setItem("data-kit-theme", "dark")
      }
    })
  }, [])

  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  )
}
