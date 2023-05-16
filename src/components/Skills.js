import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoJava from "../assets/img/logo_java.png";
import logoC from "../assets/img/logo_c.png";
import logoPython from "../assets/img/logo_python.png";
import logoJS from "../assets/img/meter.svg";
import logoHtmlCss from "../assets/img/logo_html_css.png";
import logoVSCode from "../assets/img/meter.svg";
import logoGit from "../assets/img/meter.svg";
import logoPhp from "../assets/img/meter.svg";
import logoMySql from "../assets/img/meter.svg";
import logoKotlin from "../assets/img/meter.svg";
import logoJetbrains from "../assets/img/meter.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>
                J'ai de l'expérience dans plusieurs langages de programmation et suis familier avec divers outils, voici ce que je connais :
                <br />
              </p>
              <Slider {...settings} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={logoJava} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={logoC} alt="C" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={logoPython} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={logoJS} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={logoHtmlCss} alt="HTML/CSS" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={logoVSCode} alt="VS Code" />
                  <h5>VS Code</h5>
                </div>
                <div className="item">
                  <img src={logoGit} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={logoPhp} alt="PHP" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={logoMySql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={logoKotlin} alt="Kotlin" />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={logoJetbrains} alt="IDE Jetbrains" />
                  <h5>IDE Jetbrains</h5>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );

}
