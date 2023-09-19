import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Slider from 'react-slick';
import DOMPurify from 'dompurify';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from "react-i18next";

function ModalComponent(props) {
    const [t, i18n] = useTranslation("global");

    const closeModal = () => {
        props.setShowDialog(false);
        props.setSelectedProject(null);
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    const {
        imgUrl1,
        imgUrl2,
        imgUrl3,
        imgUrl4,
        imgUrl5,
        imglang1,
        imglang2,
        imglang3,
        imglang4,
        lang1,
        lang2,
        lang3,
        lang4
    } = props.selectedProject || {};

    return (
        <Modal show={props.showDialog} onHide={closeModal}>
            <Modal.Header closeButton className="custom-close-button">
                <Modal.Title>{props.selectedProject?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col size={14} sm={7}>
                        <div className="image-container">
                            <Slider
                                {...settings}
                                style={{
                                    width: '50vw',
                                    dotStyle: { backgroundColor: 'white' },
                                    activeDotStyle: { backgroundColor: 'white' },
                                }}
                            >
                                <img src={imgUrl1} alt={props.selectedProject?.title} />
                                {imgUrl2 && <img src={imgUrl2} alt={props.selectedProject?.title} />}
                                {imgUrl3 && <img src={imgUrl3} alt={props.selectedProject?.title} />}
                                {imgUrl4 && <img src={imgUrl4} alt={props.selectedProject?.title} />}
                                {imgUrl5 && <img src={imgUrl5} alt={props.selectedProject?.title} />}
                            </Slider>
                        </div>
                    </Col>
                    <Col size={10} sm={5}>
                        <div className="text-container">
                            <div dangerouslySetInnerHTML={{ __html: i18n.language === "en" ? DOMPurify.sanitize(props.selectedProject?.descriptionen) : DOMPurify.sanitize(props.selectedProject?.descriptionfr) }}></div>
                        </div>
                        <div className="technos">
                            {t("projects.modalcomponent.technos")}
                        </div>
                        <div className="icons-container">
                            <div className="languages">
                                <Row>
                                    <Col>
                                        <div class="language-container">
                                            <img src={imglang1} alt={lang1} />
                                            <p>{lang1}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="language-container">
                                            {imglang2 && <img src={imglang2} alt={lang2} />}
                                            {imglang2 && <p>{lang2}</p>}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="language-container">
                                            {imglang3 && <img src={imglang3} alt={lang3} />}
                                            {imglang3 && <p>{lang3}</p>}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="language-container">
                                            {imglang4 && <img src={imglang4} alt={lang4} />}
                                            {imglang4 && <p>{lang4}</p>}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    {t("projects.modalcomponent.close")}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;
