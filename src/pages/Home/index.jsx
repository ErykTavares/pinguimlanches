import React from "react";
import {
  HomeStyle,
  HomeSectionStyle,
  HomeSectionTwoStyle,
  HomeSectionTreeStyle,
  HomeSectionTreeGridStyle,
  HomeSectionFourStyle,
} from "./style";
import Button from "../../components/Button";

function Home() {
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
            src={`${process.env.PUBLIC_URL}./assets/img/pinguin.webp`}
            alt=""
          />
        </div>
      </HomeSectionStyle>

      <HomeSectionTwoStyle>
        <div className="homesectiontwoleftcontent">
          <img
            src={`${process.env.PUBLIC_URL}./assets/img/image_1.webp`}
            alt="hamburger"
          />
        </div>
        <div className="homesectiontworightcontent">
          <div className="homesectiontworighttexts">
            <h2 className="homesectiontworighttextsfirst">Qualidade</h2>
            <h2 className="homesectiontworighttextssecond">
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
        <header className="homesectiontree-header">
          <h4 className="homesectiontreetext-first">
            Aprecie o nosso maravilhoso cardápio
          </h4>
          <h2 className="homesectiontreetext-second">Cardápio !</h2>
          <h4 className="homesectiontreetext-third">
            Hamburgueria . Confeitaria
          </h4>
        </header>
        <HomeSectionTreeGridStyle>
          <h2 className="homesectiontree-title">Salgados</h2>

          <div className="homesectiontreegird-imgs">
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_2.webp`}
              alt="Hamburger1"
            />
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_5.webp`}
              alt="hotdog"
            />
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_2.webp`}
              alt="Hamburger2"
            />
          </div>
        </HomeSectionTreeGridStyle>

        <HomeSectionTreeGridStyle>
          <h2 className="homesectiontree-title">Doces</h2>

          <div className="homesectiontreegird-imgs">
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_6.webp`}
              alt="torta"
            />
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_7.webp`}
              alt="puddin"
            />
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_8.webp`}
              alt="bigadeiro"
            />
          </div>
        </HomeSectionTreeGridStyle>
      </HomeSectionTreeStyle>

      <HomeSectionFourStyle>
        <div className="title">
          <h2 className="homesectionfourtitle">Delivery</h2>
          <h4 className="homesectionfoursubtitle">
            Saiba onde nos encontrar com mais facilidade
          </h4>
        </div>
        <div className="socialapp">
          <div className="apps">
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_10.webp`}
              alt="iquefome"
            />
            <Button>fazer pedido</Button>
          </div>
          <div className="apps">
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image_9.webp`}
              alt="ifood"
            />
            <Button>fazer pedido</Button>
          </div>
          <div className="apps">
            <img
              src={`${process.env.PUBLIC_URL}./assets/img/image-11.webp`}
              alt="99food"
            />
            <Button>fazer pedido</Button>
          </div>
        </div>
      </HomeSectionFourStyle>
    </HomeStyle>
  );
}

export default Home;
