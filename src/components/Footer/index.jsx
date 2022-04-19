import React from "react";
import { FooterStyle } from "./style";

function Footer() {
  return (
    <FooterStyle>
      <div className="footerleft">
        <div className="content">
          <h3>MÉTODOS DE PAGAMENTO</h3>
          <div className="quadrado"></div>
        </div>
        <div className="content">
          <h3>SOBRE NÓS</h3>
          <p>
            Lorem ipsum mauris urna hac habitasse morbi porta pulvinar duis
            feugiat, maecenas tempor eleifend feugiat lobortis libero aenean
            venenatis blandit, hendrerit nunc ligula quisque aenean elementum
            vivamus etiam non.
          </p>
        </div>
      </div>
      <div className="footerright">
        <div className="content">
          <h3>HORÁRIO DE ATENDIMENTO</h3>
          <p>
            Unidade - Itapetininga/SP <br />
            Segunda à quinta: 18:00 às 00:00 <br />
            Sexta e sábado: 18:00 às 02h00 <br />
            Domingo: 18:00 às 23h00
          </p>
        </div>
        <div className="content">
          <h3>CONTATE-NOS</h3>
          <div className="quadrado"></div>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
