import logo_java from "../assets/img/logo_java.png";
import logo_c from "../assets/img/logo_c.png";
import logo_python from "../assets/img/logo_python.png";
import meter from "../assets/img/meter.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Compétences</h2>
                        <p>J'ai appris différentes langages de programmation jusqu'à présent, voici ce que je maîtrise :<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={logo_java} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={logo_c} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={logo_python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image" />
                                <h5>XXX</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
