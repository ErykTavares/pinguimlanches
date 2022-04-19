import React from "react";
import { MenuMobileStyle } from "./style";
import { ReactComponent as Xsvg } from "../../../assets/svg/x.svg";
import Button from "../../Button";

const MenuMobile = ({ className, setActive }) => {
  const [animation, setAnimation] = React.useState(className);

  return (
    <MenuMobileStyle className={animation}>
      <Button
        type="button"
        bgcolor="transparent"
        width="40px"
        height="40px"
        onClick={() => {
          setAnimation("closemenu");
          setTimeout(() => {
            setActive(false);
          }, 1000);
        }}
      >
        <Xsvg />
      </Button>
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="#">Sobre nós</a>
        </li>
        <li>
          <a href="#">Cardápio</a>
        </li>
      </ul>
    </MenuMobileStyle>
  );
};

export default MenuMobile;
