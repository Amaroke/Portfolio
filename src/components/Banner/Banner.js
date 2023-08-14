import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Banner.css";
import { useLanguage } from "../LanguageProvider";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [, setIndex] = useState(1);
    const toRotate = useMemo(() => ["Hugo !", "Amaroke !"], []);
    const period = 1500;
    const { currentLanguage } = useLanguage();

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
                            <span className="tagline">{currentLanguage === "en" ? "Welcome to my Portfolio" : "Bienvenue sur mon Portfolio"}</span>
                            <h1>{currentLanguage === "en" ? "Hi!" : "Salut !"}</h1>
                            <h1>{currentLanguage === "en" ? "I'm " : "Moi c'est "}{window.innerWidth < 768 ? <br></br> : null}<span className="txt-rotate" dataperiod="1000"
                                data-rotate={toRotate}><span
                                    className="wrap">{text}</span></span></h1>
                            {currentLanguage === "en" ? <p>Currently pursuing a Master's degree in Computer Science, I'm passionate about programming and aspire to become a project manager in the future.<br></br> I enjoy exploring new technologies and adapting to their evolution to continuously enhance my skills. I have a strong background in software analysis, design, project management, and team leadership. My rigorous and motivated approach enables me to be effective and proficient in handling complex projects. I firmly believe that my skills and enthusiasm for computer science will allow me to make a significant contribution to innovative and exciting projects in the field of computing.</p> : <p>Actuellement étudiant en Master informatique, je suis passionné par la programmation et j'ai pour ambition de devenir un jour chef de projet.<br></br> J'aime explorer de nouvelles technologies et m'adapter à leur évolution pour améliorer mes compétences de façon continue. Je possède une solide expérience en analyse et conception de logiciels ainsi que dans la gestion de projets et d'équipes. Mon approche rigoureuse et motivée me permet d'être efficace et performant dans la réalisation de projets complexes.<br></br>Je suis convaincu que mes compétences et ma passion pour l'informatique me permettront de contribuer de manière significative à des projets innovants et stimulants dans le domaine de l'informatique.</p>}
                            <button onClick={() => { window.location.href = "#connect" }}>{currentLanguage === "en" ? "Let's Connect " : "Faisons connissance "}<ArrowRightCircle
                                size={25} /></button>
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isvisible }) =>
                                <div className={isvisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
