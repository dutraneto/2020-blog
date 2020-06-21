import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 2rem;
  }

  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan("small")`
      padding-top: 3rem;
    `}
  }

  .ais-Stats {
    color: var(--color-white);
  }

  body#grid & {
    .ais-Hits-list {
      background-color: var(--color-background);
      border-bottom: 2px dashed var(--color-grey);
      border-top: 2px dashed var(--color-grey);
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
    }

    .ais-Hits-item {
      background-color: var(--color-grey);
    }
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 2px solid var(--color-grey);
    color: var(--color-grey);
    display: flex;
    font-size: 1.6rem;
    padding: 1rem;
    width: 100%;

    &::placeholder {
      color: var(--color-white);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
