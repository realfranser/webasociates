import React, { useState, useEffect } from "react";
import { Button } from "../ButtonElements";
import {
  ArrowHovered,
  ArrowUnhovered,
  ImageBtnWrapper,
  ImageContainer,
  ImageContent,
  ImageH1,
  ImageH2,
  ImageP,
  ElementoInvisible,
  WithoutCodeButton,
  MeterCodigo,
} from "./ImagesElements";
import { animateScroll as scroll } from "react-scroll";

const ImagesElements = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <ImageContainer>
      <ImageContent>
        {/*Por ejemplo*/}
        <ImageH1>Welcome to</ImageH1>
        <ImageH2>Online Affiliates</ImageH2>
        &nbsp;
        {/*<ImageP>Texto de prueba</ImageP>*/}
        <MeterCodigo />
        <ImageBtnWrapper>
          <WithoutCodeButton
            to="signin"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Start without code{" "}
            {/*{hover ? <ArrowHovered /> : <ArrowUnhovered />}*/}
          </WithoutCodeButton>
        </ImageBtnWrapper>
      </ImageContent>
    </ImageContainer>
  );
};

export default ImagesElements;
