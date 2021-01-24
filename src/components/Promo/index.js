import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.promo}>
      <div className="op__block">
        <div className="container-fluid">
          <div
            className={style.promo__notification}
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <span>
              <span role="img" aria-label="">
                👉
              </span>{" "}
              Gooooood offer only this month! <a href="/">Unlock access now</a>
            </span>
          </div>
          <div className={style.promo__inner}>
            <div className="row">
              <div className="col-md-6">
                <h1 data-aos="fade-right">
                  Free to use
                  <br />
                  <strong>Onepage Landing</strong>
                  <br />
                  (MIT License)
                </h1>
                <p
                  className="text-muted"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Onepage Landing 3-in-1 package includes next versions
                </p>
                <ul
                  className={style.promo__list}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <li>
                    <span className={style.promo__list__icon}>
                      <img
                        src="/resources/img/icons/gatsby.svg"
                        alt="GatsbyJS"
                      />
                    </span>
                    <span>GatsbyJS Framework</span>
                  </li>
                  <li>
                    <span
                      className={`${style.promo__list__icon} ${style.promo__list__icon__html}`}
                    >
                      <img
                        src="/resources/img/icons/html-5.svg"
                        alt="Static Html"
                      />
                    </span>
                    <span>Static Html</span>
                  </li>
                  <li>
                    <span
                      className={`${style.promo__list__icon} ${style.promo__list__icon__sketch}`}
                    >
                      <img
                        src="/resources/img/icons/sketch.svg"
                        alt="Sketch / Figma / Adobe XD"
                      />
                    </span>
                    <span>Sketch Wireframes</span>
                  </li>
                </ul>
                <div
                  className={style.promo__buttons}
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <a href="https://github.com/sellpixels/projects-list" className="op__btn mr-3">
                    Download
                    <i className="fe fe-download ml-2" />
                  </a>
                  <a href="https://docs.visualbuilder.cloud" className="op__btn op__btn--lightDark">
                    Read docs
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={style.promo__img}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    src="/resources/img/promo.png"
                    alt="Visual Builder Onepage Landing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
