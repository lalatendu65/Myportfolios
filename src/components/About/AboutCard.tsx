import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Lalatendu pany </span>
            from <span className="purple"> Odisha,India.</span>
            <br /> I am experienced Nodejs developer
            <br />
            Additionally, I am currently employed as a software developer at Auctionsoftware.
            <br />
            <br />
            I have a passion for creating
              efficient and innovative software solutions that solve real-world
              problems.
            <br/>
            I have also participated in
              coding competitions and hackathons, where I have honed my
              problem-solving skills and worked collaboratively with other
              developers. In my free time, I enjoy watching motivation viedo and
              playing online games , and I am always seeking new challenges and
              opportunities to expand my knowledge and skills. Thank you for
              taking the time to visit myportfolio website. I look forward to
              the opportunity to work with you
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Activity
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
