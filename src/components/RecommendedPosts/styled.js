import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import { lighten } from "polished"

export const RecommendedWrapper = styled.section`
  border-bottom: 2px dashed var(--color-grey);
  border-top: 2px dashed var(--color-grey);
  background: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-left: 2px dashed var(--color-grey);
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: transparent;
  color: ${props => props.color};
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan("large")`
    padding: 3rem 1rem;
  `}

  ${media.lessThan("small")`
    font-size: 14px;
  `}

  &:hover {
    color: ${props => props.color && lighten(0.1, props.color)};
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
