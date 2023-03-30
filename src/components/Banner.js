import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer.", "Roi des bébous."];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bienvenue sur mon Portfolio</span>
                                    <h1>{`Hey ! Je suis Amaroke, `} <span className="txt-rotate" dataPeriod="1000"
                                                                  data-rotate={toRotate}><span
                                        className="wrap">{text}</span></span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dictum odio.
                                        Suspendisse a nunc dolor. Donec mattis faucibus risus ac mollis. Duis ac porta
                                        justo. Praesent imperdiet orci sit amet erat vestibulum, a rhoncus lacus
                                        laoreet. Nulla a rutrum diam. Vivamus quis fermentum ipsum, eu mollis urna. Cras
                                        rhoncus elit tellus, vel fermentum dolor finibus sed. Sed facilisis euismod
                                        purus, nec semper ipsum semper et. Curabitur lobortis tincidunt scelerisque.
                                        Etiam dapibus tempus leo eu dignissim. Donec ut arcu dui. Fusce et nisl ut nunc
                                        varius molestie. Quisque sed rutrum velit, eget gravida ipsum. Integer a maximus
                                        lorem. Cras vitae mi ullamcorper, mattis erat sed, vehicula lacus.
                                    </p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle
                                        size={25}/></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
