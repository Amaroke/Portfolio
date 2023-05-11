import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [_, setIndex] = useState(1);
    const toRotate = ["Hugo !", "Amaroke !"];
    const period = 1500;

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
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bienvenue sur mon Portfolio</span>
                                    <h1>{"Salut !"}</h1>
                                    <h1>{`Moi c'est `} <span className="txt-rotate" dataPeriod="1000"
                                        data-rotate={toRotate}><span
                                            className="wrap">{text}</span></span></h1>
                                    <p>Actuellement étudiant en Master informatique à l'université de Lorraine, je suis passionné par le développement informatique et j'ai pour ambition de devenir chef de projet. Je suis particulièrement intéressé par le développement logiciel, mais aussi par le développement web et mobile. J'aime explorer de nouvelles technologies et m'adapter à leur évolution pour améliorer mes compétences de façon continue. En outre, ma formation m'a permis d'acquérir une solide expérience en analyse et conception de logiciels ainsi que dans la gestion de projets et d'équipes. Mon approche rigoureuse et motivée me permet d'être efficace et performant dans la réalisation de projets complexes. Je suis convaincu que mes compétences et ma passion pour l'informatique me permettront de contribuer de manière significative à des projets innovants et stimulants dans le domaine de la technologie. Je suis prêt à relever tous les défis pour y parvenir, grâce à mon engagement à travailler dur et à continuer d'apprendre de nouvelles choses.
                                    </p>
                                    <button onClick={() => console.log('connect')}>Faisons connaissance <ArrowRightCircle
                                        size={25} /></button>
                                </div>}
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
