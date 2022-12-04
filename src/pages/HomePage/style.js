import styled from "styled-components";

export const Main = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 1.875rem;


@media only screen and (min-width: 768px) {
  & {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 80%;
  }
}

.containerMain__vitrine {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;

  h2{
    text-align: left;
    
    span{
      opacity: 0.4
    }
  }

}

@media only screen and (min-width: 768px) {
  .containerMain__vitrine {
    width: 60%;
  }
}

@media only screen and (min-width: 992px) {
  .containerMain__vitrine {
    width: 70%;
  }
}
`