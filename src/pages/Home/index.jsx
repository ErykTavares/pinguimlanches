import React from "react";
import {
  HomeStyle,
  HomeSectionStyle,
  HomeSectionTwoStyle,
  HomeSectionTreeStyle,
  HSTreeGridStyle,
  HomeSectionFourStyle,
} from "./style";
import Button from "../../components/Button";

const Home = () => {
  return (
    <HomeStyle>
      <HomeSectionStyle>
        <div className="homeleftcontent">
          <div className="texts">
            <h2 className="textTitleFirst">A hora</h2>
            <h2 className="textTitleSecond">PERFEITA</h2>
            <h2 className="textTitleThird">para</h2>
            <h2 className="textTitleFourth">LANCHAR !</h2>
          </div>
          <Button type="button">Fazer pedido agora!</Button>
        </div>
        <div className="homerightccontent">
          <img
            src={process.env.PUBLIC_URL + "./assets/img/pinguin.png"}
            alt=""
          />
        </div>
      </HomeSectionStyle>

      <HomeSectionTwoStyle>
        <div className="hstwoleftcontent">
          <img
            src={process.env.PUBLIC_URL + "./assets/img/image 1.png"}
            alt="hamburger"
          />
        </div>
        <div className="hstworightcontent">
          <div className="hstworighttexts">
            <h2 className="hstworighttextsfirst">Qualidade</h2>
            <h2 className="hstworighttextssecond">
              QUALIDADE E VARIEDADE DE ALIMENTOS IMPECÁVEL.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button width="160px">Ver cardápio agora!</Button>
        </div>
      </HomeSectionTwoStyle>

      <HomeSectionTreeStyle>
        <header className="hstree-header">
          <h4 className="hstreetext-first">
            Aprecie o nosso maravilhoso cardápio
          </h4>
          <h2 className="hstreetext-second">Cardápio !</h2>
          <h4 className="hstreetext-third">Hamburgueria . Confeitaria</h4>
        </header>
        <HSTreeGridStyle>
          <h2 className="hstree-title">Salgados</h2>

          <div className="hstreegird-imgs">
            <img src={process.env.PUBLIC_URL + "./assets/img/image 2.png"} alt="Hamburger1" />
            <img src={process.env.PUBLIC_URL + "./assets/img/image 5.png"} alt="hotdog" />
            <img src={process.env.PUBLIC_URL + "./assets/img/image 2.png"} alt="Hamburger2" />

          </div>
        </HSTreeGridStyle>

        <HSTreeGridStyle>
          <h2 className="hstree-title">Doces</h2>

          <div className="hstreegird-imgs">
            <img src={process.env.PUBLIC_URL + "./assets/img/image 6.png"} alt="torta" />
            <img src={process.env.PUBLIC_URL + "./assets/img/image 7.png"} alt="puddin" />
            <img src={process.env.PUBLIC_URL + "./assets/img/image 8.png"} alt="bigadeiro" />

          </div>
        </HSTreeGridStyle>
      </HomeSectionTreeStyle>

      <HomeSectionFourStyle>
        <div className="title">
        <h2 className="hsfourtitle">Delivery</h2>
        <h4 className="hsfoursubtitle">Saiba onde nos encontrar com mais facilidade</h4>
        </div>
        <div className="socialapp">
          <div className="apps">
            <img src={process.env.PUBLIC_URL + "./assets/img/image 10.png"} alt="ifood" />
            <Button>fazer pedido</Button>
          </div>
          <div className="apps">
            <img src={process.env.PUBLIC_URL + "./assets/img/image 9.png"} alt="ifood" />
            <Button>fazer pedido</Button>
          </div>
          <div className="apps">
            <img src={process.env.PUBLIC_URL + "./assets/img/image 11.png"} alt="ifood" />
            <Button>fazer pedido</Button>
          </div>
        </div>
      </HomeSectionFourStyle>
    </HomeStyle>
  );
};

export default Home;
