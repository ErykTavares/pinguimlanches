import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${({ width }) => (width || "150px")};
  height: ${({ height }) => (height || "35px")};
  border-radius: 3px;
  background-color: ${({ bgcolor }) => (bgcolor || "var(--red)")};
  color: var(--textwhite);
  font-family: "single day", cursive;
  font-size: 1.1rem;
  border: none;
  box-shadow: 0px 4px 84px 0px #ff000040;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
