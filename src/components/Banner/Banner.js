import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Banner.css";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [, setIndex] = useState(1);
    const toRotate = useMemo(() => ["Hugo !", "Amaroke !"], []);
    const period = 1500;

    useEffect(() => {
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
        };

        let ticker = setInterval(tick, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, loopNum, isDeleting, toRotate]);


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            <span className="tagline">Bienvenue sur mon Portfolio</span>
                            <h1>{"Salut !"}</h1>
                            <h1>{`Moi c'est `}{window.innerWidth < 768 ? <br></br> : null}<span className="txt-rotate" dataperiod="1000"
                                data-rotate={toRotate}><span
                                    className="wrap">{text}</span></span></h1>
                            <p>Actuellement étudiant en Master informatique, je suis passionné par la programmation et j'ai pour ambition de devenir un jour chef de projet.<br></br> J'aime explorer de nouvelles technologies et m'adapter à leur évolution pour améliorer mes compétences de façon continue. Je possède une solide expérience en analyse et conception de logiciels ainsi que dans la gestion de projets et d'équipes. Mon approche rigoureuse et motivée me permet d'être efficace et performant dans la réalisation de projets complexes.<br></br>Je suis convaincu que mes compétences et ma passion pour l'informatique me permettront de contribuer de manière significative à des projets innovants et stimulants dans le domaine de l'informatique.
                            </p>
                            <button onClick={() => { window.location.href = "#connect" }}>Faisons connaissance <ArrowRightCircle
                                size={25} /></button>
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
