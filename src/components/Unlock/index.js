import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.unlock}>
      <div className="op__block">
        <div className={style.unlock__container}>
          <div className="container-fluid">
            <h1 data-aos="fade-left" data-aos-delay="200">
              unlock access.
            </h1>
            <p data-aos="fade-right" data-aos-delay="400">
              Want more cool stuff?
              <span className={style.unlock__tag}>Explore early products</span>
              They are also included in the subscription
            </p>
            <a
              href="/"
              className="op__btn"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Go Unlimited for 19$
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
