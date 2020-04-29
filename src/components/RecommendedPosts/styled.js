import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 2px dashed var(--color-green);
  border-top: 2px dashed var(--color-green);
  background: transparent;
  display: flex;
  margin: auto;
  width: 100%;
  border-left: 2px dashed var(--color-green);
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: transparent;
color: ${props => props.color};
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  /* &:hover {
    background: ${props => props.color};
  } */

  &.previous {
    border-right: 2px dashed var(--color-green);
  }

  &.next {
    justify-content: flex-end;
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
