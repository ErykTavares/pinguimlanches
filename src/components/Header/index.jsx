import React from "react";
import { HeaderStyle } from "./style";
import { ReactComponent as Pinguin } from "../../assets/svg/pinguin navbar.svg";
import { ReactComponent as MenuButton } from "../../assets/svg/MenuMobile.svg";
import MenuMobile from "./MenuMobile"
import Button from "../Button"

const Header = () => {
  const [active, setActive] = React.useState(false);

  return (
    <HeaderStyle>
      <Pinguin className="iconlogo"/>
      <nav>
        <ul className="desktopmenulist">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li className="icon">
            <Pinguin />
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Cardápio</a>
          </li>
        </ul>
      </nav>
      <Button bgcolor="transparent" width="30px" height="22px" onClick={()=>setActive(!active)}>
        <MenuButton  className={active? "menutoggle active" : "menutoggle"}/>
      </Button>
      {active? <MenuMobile className="openmenu" setActive={setActive}/> : null}
    </HeaderStyle>
  );
};

export default Header;
