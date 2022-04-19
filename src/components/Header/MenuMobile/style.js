import styled from "styled-components";

export const MenuMobileStyle = styled.nav`
  position: fixed;
  top: 0;
  right: 0px;
  display: none;
  width: 250px;
  height: 100%;
  display: flex;
  align-items: start;
  background-color: var(--darkyellow);
  z-index: 10;
  transform: translateX(100%);
  transition: 1s;

  ul {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    position: absolute;
    svg {
      width: 40px;
      height: 40px;
      transition: 0.3s;
      &:hover {
        color: var(--yellow);
      }
    }
  }
`;
