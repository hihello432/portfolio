import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./ExpAndSkills.module.scss";
import ReactIcon from "../../../../assets/ReactIcon.svg";
import NodeIcon from "../../../../assets/NodeIcon.svg";
import JavaScriptIcon from "../../../../assets/JavaScriptIcon.svg";
import MongoDbIcon from "../../../../assets/MongoDbIcon.svg";
import CssIcon from "../../../../assets/CssIcon.svg";
import BootstrapIcon from "../../../../assets/BootstrapIcon.svg";

const ExpAndSkills = () => {
  const skills = [
    { name: "React JS", icon: ReactIcon },
    { name: "Node JS", icon: NodeIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
  ];

  const experiences = [
    {
      title: "ReactJs Developer",
      duration: "Nov 2022 - Present",
      location: "On-site",
      type: "Full Time",
      company: "Your Company Name",
      description:
        "As a React developer, I specialized in creating sleek and responsive user interfaces. Through collaborative teamwork and agile methodologies, I crafted efficient and visually appealing front-end solutions. My role involved designing reusable components and optimizing performance to enhance the overall user experience.",
    },
    {
      title: "NodeJs Developer",
      duration: "Jan 2020 - Oct 2022",
      location: "Remote",
      type: "Contract",
      company: "Another Company Name",
      description:
        "As a Node.js developer, my responsibilities included building scalable and efficient backend systems using Node.js and Express.js. I worked closely with front-end developers to integrate APIs and ensure smooth communication between the server and client sides. Additionally, I participated in code reviews and contributed to architectural decisions to improve the overall system.",
    },
    // Add more experiences as needed
  ];

  const SkillsSection = () => {
    return (
      <Col md={8} sm={12} className={Styles.skillsContainer}>
        <h2 className={Styles.sectionTitle}>Skills</h2>
        <div className={Styles.skillsWrapper}>
          {skills.map((skill, index) => (
            <div key={index} className={Styles.skillItem}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={Styles.skillIcon}
              />
              <p className={Styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </Col>
    );
  };

  const EducationSection = () => {
    return (
      <Col sm={12} md={4} className={Styles.educationContainer}>
        <div className={Styles.educationWrapper}>
          <div className="mb-3">
            <code className="d-block">2018-2022</code>
            <strong>B.E. in Computer Engineering</strong>
            <span className="d-block">Your college name</span>
          </div>
          <div>
            <code className="d-block">2015-2018</code>
            <strong>Diploma in Computer Engineering</strong>
            <span className="d-block">Your college name</span>
          </div>
        </div>
      </Col>
    );
  };

  const ExperienceSection = () => {
    return experiences.map((experience, index) => (
      <div key={index} className={Styles.experienceWrapper}>
        <div className={Styles.experienceLeft}>
          <strong>{experience.title}</strong>
          <p>
            {experience.duration} | {experience.location}
          </p>
          <span className={Styles.experienceTime}>{experience.type}</span>
        </div>
        <div className={Styles.experienceRight}>
          <strong>{experience.company}</strong>
          <p>{experience.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h4 className="text-underline">Experience</h4>
          <div className={Styles.experienceContainer}>
            <ExperienceSection />
          </div>
        </Col>
        <Col sm={12} className={Styles.centerBorder}></Col>
        <Col sm={12}>
          <h4 className="text-underline">Education & Skills</h4>
          <Row className="d-flex mx-sm-0 mx-2">
            <EducationSection />
            <SkillsSection />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpAndSkills;
