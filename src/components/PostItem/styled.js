import styled from "styled-components"

import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--color-white);
  display: flex;
  text-decoration: none;
  transition: color 0.5s;
  margin-top: 2rem;

  &:hover {
    color: ${props => props.color};
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 2px dashed var(--color-green);
  padding: 2rem 3rem;
  width: 100%;
`

export const PostItemTag = styled.div`
  color: ${props => props.color};
  height: 90px;
  width: 90px;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.75rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  /* line-height: 1.5; */
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`
