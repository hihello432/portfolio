import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import phone from "../../../../assets/deskphone.png";
import mail from "../../../../assets/mail.png";
import distance from "../../../../assets/distance.png";

const items = [
  { logo: distance, text: "Ahmedabad, India" },
  { logo: phone, text: "+60 52623 56698" },
  { logo: mail, text: "devtest@gmail.com" },
];
const ContactUs = () => {
  return (
    <div className="bg-portfolio-gray">
      <Container className="py-4 ">
        <Row>
          <Col md={6}>
            {/* Content for first column */}
            <div>
              <h2>
                What’s your story? <br />
                Get in touch
              </h2>
              <p>
                If you have an interesting project in mind, I'm ready to lend my
                expertise. Reach out anytime!
              </p>
            </div>
            <div className="d-flex flex-column">
              {items.map((item) => {
                return (
                  <Row>
                    <Col>
                      <img src={item.logo} alt="logo image" />
                      <span className="ms-2"> {item.text}</span>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Col>
          <Col md={6} className="mt-3 mt-md-0">
            <div>
              <h4>Say something</h4>
            </div>
            <div className="d-flex flex-column">
              <Row className="mb-3">
                <Col md={6}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    className="form-control mt-md-0 mt-3"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="my-2">
                  <button className="btn btn-dark">Send Message</button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
