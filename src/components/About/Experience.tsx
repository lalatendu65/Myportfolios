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
            <h3 className="vertical-timeline-element-title">Excelsior+2 sceiece college , Jajpur Road, Odisha</h3>
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
            <h3 className="vertical-timeline-element-title">Junior Backend Developer - Publicis Sapient</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru ,India</h4>
            <p>Developed the backend infrastructure for 3 projects.</p>
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
            <p>Experienced Node.js developer adept at building high-performance, secure web applications with RESTful APIs, using HTML, CSS, and jQuery for user-friendly interfaces. Proficient in MySQL databases and cross-functional collaboration. Currently working on the 'ECX'  an auction-based software allowing users to bid on a wide range of products. 
            Access the project through this link:https://ecxstag.moblearn.net/</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Container>
  );
}

export default Experience;
