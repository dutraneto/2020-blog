import React from "react"

import * as S from "./styled"

const Works = props => {
  return (
    <S.CardWorkList>
      <S.CardWorkLink>
        <S.CardWork>
          <figure>
            <img src="/static/assets/images/screenshot-rocks.jpeg" alt="" />
            <span>2019</span>
            <p>Petlove</p>
            <figcaption>Petlove</figcaption>
          </figure>
        </S.CardWork>
      </S.CardWorkLink>
    </S.CardWorkList>
  )
}

export default Works
