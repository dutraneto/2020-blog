import styled from "styled-components"
import {Link} from "gatsby"

export const ProfileWrapper = styled.section`
    color: var(--color-white);
    display: flex;
    flex-direction: column;
`

export const ProfileLink = styled(Link)`
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--color-green);
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 1.6rem;
    margin: 1rem auto 0;
    text-decoration: none;
`

export const ProfilePosition = styled.small`
    display: block;
    font-size: 14px;
    font-weight: 300;
`

export const ProfileDescription = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4
`
