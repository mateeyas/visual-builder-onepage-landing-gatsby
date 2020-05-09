import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block" data-aos="fade-up" data-aos-delay="400">
      <div className="container-fluid">
        <div className="op__block__heading text-center">
          Features & Libraries
        </div>
        <div className={style.features}>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/gatsby.svg" alt="GatsbyJS" />
            </div>
            <div className={style.features__title}>GatsbyJS</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/sketch.svg" alt="Sketch" />
            </div>
            <div className={style.features__title}>Sketch</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/highcharts.svg" alt="Highcharts" />
            </div>
            <div className={style.features__title}>Highcharts</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/nodejs-icon.svg" alt="NodeJS" />
            </div>
            <div className={style.features__title}>NodeJS</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/react.svg" alt="React" />
            </div>
            <div className={style.features__title}>React</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/sass.svg" alt="Sass" />
            </div>
            <div className={style.features__title}>Sass</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/react.svg" alt="React" />
            </div>
            <div className={style.features__title}>React</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/highcharts.svg" alt="Highcharts" />
            </div>
            <div className={style.features__title}>Highcharts</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/sass.svg" alt="Sass" />
            </div>
            <div className={style.features__title}>Sass</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/gatsby.svg" alt="GatsbyJS" />
            </div>
            <div className={style.features__title}>GatsbyJS</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/sketch.svg" alt="Sketch" />
            </div>
            <div className={style.features__title}>Sketch</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/nodejs-icon.svg" alt="NodeJS" />
            </div>
            <div className={style.features__title}>NodeJS</div>
          </div>
        </div>
      </div>
    </div>
  )
}
