
import location from "../../Assets/location.png";
import email from "../../Assets/email.png";
import mobile from "../../Assets/phone.png";
import { Container } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function ContactMe() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className="container1" style={{ textAlign: "left" }}>
          <div className="form">
            <div className="contact-info">
              <h3 className="h1">Let's get in touch</h3>
              <p className="mt-5">
                "Hello and thank you for visiting my website! My name is Lalatendu Pany and I'm a Software developer
                Whether you're interested in discussing a potential project or any Job oppertunity in software developer
                filed , I'd love to hear from you. You can reach me by email or my personal conatct number . I typically
                respond to messages within 24 hours, so you can expect to hear back from me soon. Thank you again for
                your interest, and I look forward to connecting with you!"
              </p>

              <div className="info mt-5">
                <div className="d-flex mt-3 align-items-center" style={{ gap: "10px" }}>
                  <img src={location} width={35} className="circle-rounded" alt="" />
                  <p className="m-0">48,At-vn college square , Jajpur Road, Odisha</p>
                </div>
                <div className="d-flex mt-3 align-items-center" style={{ gap: "10px" }}>
                  <img src={email} width={35} className="circle-rounded" alt="" />
                  <p className="m-0">lalatendupany.2000@gmail.com</p>
                </div>
                <div className="d-flex mt-3 align-items-center" style={{ gap: "10px" }}>
                  <img src={mobile} width={35} className="circle-rounded" alt="" />
                  <p className="m-0">+91-9668414856</p>
                </div>
              </div>

              <div className="social-media mt-5">
                <p>Connect with me :</p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a href="https://github.com/lalatendu65" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a href="#twitter" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a href="https://www.linkedin.com/in/lalatendu-pany-2670521ab/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a href="https://www.instagram.com/lalatendupany_12/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
export default ContactMe;
