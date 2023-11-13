import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="about-section">
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2008 - 2015"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Saraswati Shishu Vidyamandir, Jajpur Road, Odisha</h3>
            <p> High School </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015-2017"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Excelsior+2 Science college , Jajpur Road, Odisha</h3>
            <p> Senior Secondary School </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Indira Gandhi Institute Of Technology,Sarang ,Dhenkanal ,Odisha
            </h3>

            <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>

            <p> Electronic and Telecommunication Engineer </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11 April 2022 - 29 December 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer - Publicis Sapient</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru ,India</h4>
            <p>Experienced Performance Analyst skilled in analyzing test results, diagnosing performance issues, and collaborating with developers for solutions</p>
            <p>Troubleshoot performance issues, analyze bottlenecks, and make recommendations to improve the solution's performance.</p>
            <p>Working on a live project Tesco, a UK-based e-commerce platform</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022-January 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Full stack Developent Bootcamp ,10X Academy</h3>
            <h4 className="vertical-timeline-element-subtitle">Hydrabad, India</h4>
            <p>
              In 6 Months i leraned on DSA(Python),frontend(Html,css,React js) And
              Backend(Javascript,Nodejs,Mongodb,Postman)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11 April 2023 Present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior Backend Developer - Auctionsoftware</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai ,India</h4>
            <p>Developed and maintained web applications using Node.js and Express.js to ensure high-performance, secure, and scalable software solutions.</p>
            <p>Collaborated with the team to design, implement, and maintain MySQL databases, including schema design, data modeling, and query optimization, to support application functionality.</p>
            <p>Designed and implemented RESTful APIs to facilitate seamless communication between the front-end and back-end systems.
Implemented authentication and authorization mechanisms to ensure secure access to sensitive data and features.</p> 

          <p>Diagnosed and resolved complex technical issues, contributing to the application's stability and performance improvement.
Stayed up-to-date with industry trends and best practices to continuously enhance technical skills and contribute to the team's growth.</p>

        <p>Currently working on 'ECX,' an auction-based software allowing users to bid on a wide range of products.</p>
      <p>You can visit this website using "https://ecxstag.moblearn.net"</p>


          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Container>
  );
}

export default Experience;
