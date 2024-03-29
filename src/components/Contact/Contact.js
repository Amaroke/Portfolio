import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';
import contactImg from "../../assets/img/contact-img.svg";
import "./contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const [t] = useTranslation("global")

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const [state, handleSubmit] = useForm("mknaeopp");

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img className={"animate__animated animate__zoomIn"} src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h2>{t("contact.contact")}</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    value={formDetails.firstName}
                    placeholder={t("contact.firstname")}
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                  <ValidationError prefix="prenom" field="prenom" errors={state.errors} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formDetails.lastName}
                    placeholder={t("contact.lastname")}
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                  <ValidationError prefix="nom" field="nom" errors={state.errors} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    id="email"
                    type="email"
                    value={formDetails.email}
                    name="email"
                    placeholder="Email"
                    pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    value={formDetails.phone}
                    placeholder={t("contact.phone")}
                    pattern="[\d\s()+-]+"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                  <ValidationError prefix="Tel" field="tel" errors={state.errors} />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <button type="submit" disabled={state.submitting || state.succeeded}>
                    <span>
                      {!state.succeeded && !state.submitting
                        ? t("contact.send")
                        : state.succeeded
                          ? t("contact.sent")
                          : t("contact.sending")}
                    </span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;