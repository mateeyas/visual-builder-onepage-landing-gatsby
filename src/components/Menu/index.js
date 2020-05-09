import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.menu}>
      <div className="op__block">
        <div className={style.menu__inner}>
          <div className={style.menu__logo__container}>
            <div className={style.menu__logo}>
              <img
                src="/resources/img/logo.svg"
                alt="Clean UI Onepage Landing"
              />
              <div className={style.menu__logo__name}>Clean UI</div>
              <div className={style.menu__logo__descr}>Onepage Landing</div>
            </div>
          </div>
          <div className={style.menu__links}>
            <a href="/" rel="noopener noreferrer">
              Home
            </a>
            <a href="/" rel="noopener noreferrer">
              Pricing
            </a>
            <a href="/" rel="noopener noreferrer">
              Our Products
            </a>
            <a href="/" rel="noopener noreferrer">
              Hire Us
            </a>
            <a href="/" rel="noopener noreferrer">
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
