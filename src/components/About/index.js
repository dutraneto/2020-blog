import React from "react"

import * as S from "./styled"

const About = () => {
  return (
    <S.AboutWrapper>
      <S.AboutTitle>Hi!</S.AboutTitle>
      <S.AboutDescription>
        I am José Dutra. I worked at The Brazilian Army Forces as a Sergeant for
        the past 16 years. However, my passion for programming has got me
        following a new career change as a Frontend Developer. My interest in
        programming languages, such as JavaScript, drove me to specializing
        currently in Frontend Development.
      </S.AboutDescription>
      <S.AboutDescription>
        As a developer, I've been working with basic web technologies (HTML,
        CSS, and Javascript) and sophisticated frameworks and libraries like
        jQuery, React, Sass, Bootstrap in projects of different sizes. I also
        have experience building backend applications using Node.js with
        Express.js and MongoDB and as well as Python with Django.
      </S.AboutDescription>
      <S.PortfolioLink
        cover
        direction="left"
        bg="#2a2139"
        duration={0.6}
        to="/works/"
        activeClassName="active"
        title="Click it!"
      >
        Please, ckick to visit my lab!
      </S.PortfolioLink>
    </S.AboutWrapper>
  )
}
export default About
