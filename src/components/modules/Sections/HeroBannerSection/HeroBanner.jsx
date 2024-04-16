import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroBannerImage from "../../../../assets/heroBannerImage.png";
import heroBannerBg from "../../../../assets/HeroBannerBg.png";
import Styles from "./HeroBanner.module.scss";

const HeroBanner = () => {
  return (
    <div className={Styles.heroBannerContainer}>
      <div className={Styles.bgImage}></div>
      <div className={Styles.heroBannerImg}>
        {/* <img
          src={heroBannerImage}
          alt="heroBannerImage"
          className={Styles.image}
        /> */}
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className={Styles.left}>
              <p>Hello my name is</p>
              <h1>Jack Ryan</h1>
              <h4 className="text-portfolio-primary">Developer</h4>
              <p>
                Welcome to my digital playground! With each line of code, I
                craft dynamic and user-centric solutions that push the
                boundaries of what's possible. Whether it's building responsive
                web applications or diving into the intricacies of database
                architecture, I thrive on challenges that demand creativity and
                innovation. Join me on this journey as we explore the endless
                possibilities of the digital world together!
              </p>
              <button className="btn btn-dark">Download CV</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
