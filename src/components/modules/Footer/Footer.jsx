import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <Container fluid className="border-top border-dark">
      <Row>
        <Col>
          <div className={styles.footer}>
            <p>© 2024 - All rights are reserved</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
