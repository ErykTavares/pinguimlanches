import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  max-width: 1440px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  color: var(--textwhite);
  font-family: "Roboto Condensed";
  padding: 0 7rem;
  @media screen and (max-width: 795px) {
    height: 700px;
    flex-direction: column;
    padding: 1.5rem 3rem;
  }
  @media screen and (max-width: 360px) {
    height: 710px;
  }

  p {
    color: var(--textgray);
    word-break: break-all;
    margin-top: 0.5rem;

    @media screen and (max-width: 795px) {
      width: 70%;
      align-self: center;
      text-align: justify;
    }
  }

  .content {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .footerleft {
    width: 50%;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    @media screen and (max-width: 795px) {
      width: 100%;
      height: 300px;
      align-items: center;
      align-content: center;
      text-align: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .content {
      width: 100%;
      max-width: 400px;
    }
  }

  .footerright {
    width: 50%;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    @media screen and (max-width: 795px) {
      width: 100%;
      height: 270px;
      align-items: center;
      justify-content: space-between;
    }

    .content {
      width: 230px;
      @media screen and (max-width: 795px) {
        margin-bottom: 1rem;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }

  .quadrado {
    width: 200px;
    height: 50px;
    background-color: var(--textwhite);
    margin-top: 0.5rem;
    @media screen and (max-width: 795px) {
      align-self: center;
    }
  }
`;
