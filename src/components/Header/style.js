import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--yellow);
  @media screen and (max-width: 665px) {
    justify-content: space-evenly;
  }

  .desktopmenulist {
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 665px) {
      display: none;
    }
  }

  .icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      width: 80px;
    }
  }

  .iconlogo {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 80px;
    }
    rect {
      display: none;
    }

    @media screen and (max-width: 665px) {
      rect {
        display: flex;
      }
    }
  }
  .menutoggle {
    display: none;
    rect {
      transition: 1s;
    }
    @media screen and (max-width: 665px) {
      display: flex;
    }
  }

  li {
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }

  a {
    font-family: "Simgle day", cursive;
    font-size: 1.1rem;
    color: var(--textblack);
  }
`;
