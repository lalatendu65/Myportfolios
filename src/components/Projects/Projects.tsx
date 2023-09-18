
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/about.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CRUD Application"
              description="Here i created Usermanagement Application using Reactjs, Nodejs and MongoDb"
              ghLink="https://github.com/lalatendu65/ReactCurd"
              demoLink="https://lalatendu65.github.io/ReactCurd/"
            />
            
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dynamic Weather-app"
              description="I created a dynamic weather application .where you can know your weather condition like temperature, wind flow .Etc"
              ghLink="https://github.com/lalatendu65/Dynamic-Weather-app"
              demoLink="#demo link"
            />
            
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SignUp/Login Api"
              description="Here i created  Signup and Login up using Nodejs and mongodb"
              ghLink="https://github.com/lalatendu65/User-login-singup-API"
              demoLink="#demo link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
