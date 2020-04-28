import styled from "styled-components"

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  align-content: stretch;

  a {
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.5s;
    border: 2px dashed var(--color-green);
    padding: 2rem 3rem;
    border-top: none;

    &:hover {
      color: var(--color-green);
    }
  }

  p {
    padding: 2rem 3rem;
  }
`
