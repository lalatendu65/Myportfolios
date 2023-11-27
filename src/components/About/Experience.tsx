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
            <h3 className="vertical-timeline-element-title">Software Developer Trainee - Publicis Sapient</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru ,India</h4>
            <p>Completed comprehensive training in the MERN (MongoDB, Express.js, React.js, Node.js) stack. </p>
             <p>Gained hands-on experience in building modern web applications using cutting-edge technologies.Developed and deployed web applications, utilizing the following technologies. </p>
            <p>React.js for building dynamic and interactive user interfaces.MongoDB for efficient and scalable data 
              storage.Node.js and Express.js for server-side development and RESTful API creation.</p> 
            <p>Worked on real-world projects, applying knowledge of the MERN stack to create full-stack web solutions. Collaborated with senior developers and mentors to enhance software development skills and best practices. </p> 
            <p> Acquired proficiency in creating responsive and user-friendly web applications to improve the user experience.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022-January 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Full stack Development BootCamp ,10X Academy</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              In 6 Months I have immersed myself in a comprehensive learning journey focused on Data Structures and Algorithms (DSA) using Python. In addition, I have acquired proficiency in front-end development, mastering the trifecta of HTML, CSS, and React.js. On the backend, I've delved into the world of server-side scripting with JavaScript, utilizing Node.js for efficient server operations. To complement this, I've gained hands-on experience with MongoDB for database management and honed my API development skills with Postman.
            </p>
            <p>
              This multifaceted skill set not only showcases my dedication to continuous learning but positions me as a versatile developer capable of handling diverse aspects of software development. I am now well-equipped to contribute to projects spanning both frontend and backend development, leveraging my expertise in Python, React.js, Node.js, MongoDB, and Postman.
            </p>
            <p>
              I am enthusiastic about applying these skills in real-world scenarios and am confident in my ability to contribute effectively to collaborative and dynamic development environments.
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
