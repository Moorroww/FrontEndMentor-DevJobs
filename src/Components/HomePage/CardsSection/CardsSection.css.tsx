import styled from "styled-components";

export const StyledCardsSectionContainer = styled.section`
  margin-inline: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.4rem;

  @media (width>767px) {
    margin-inline: 4rem;
    grid-template-columns: 1fr 1fr;
    row-gap: 4rem;
    column-gap: 1.1rem;
  }

  @media (width>1439px) {
    margin-inline: 16.5rem !important;
    width: 100%;
    max-width: 1110px;
    justify-self: center;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
  }
`;