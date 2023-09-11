import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import headerImg from "../../assets/img/header-img.svg";
import "animate.css";
import "./Banner.css";

const period = 1500;

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [, setIndex] = useState(1);
    const toRotate = useMemo(() => ["Hugo !", "Amaroke !"], []);
    const [t] = useTranslation("global")

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
                        <span className="tagline">{t("banner.welcome")}</span>
                        <h1>{t("banner.hi")}</h1>
                        <h1>{t("banner.im")}{window.innerWidth < 768 ? <br></br> : null}
                            <span className="txt-rotate" dataperiod="1000"
                                data-rotate={toRotate}>
                                <span className="wrap">{text} </span>
                            </span>
                        </h1>
                        <p><ReactMarkdown>{(t("banner.presentation"))}</ReactMarkdown></p>
                        <button onClick={() => { window.location.href = "#connect" }}>{t("banner.connect")}
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className={"animate__animated animate__zoomIn"}>
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;