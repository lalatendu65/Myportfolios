import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdfDocument from "./LalatenduPany_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfDocument} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ overflow: "hidden", height: "1520px" }}>
          <Document file={pdfDocument} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 900 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row className="resume" style={{ overflow: "hidden", height: "1520px" }}>
          <Document file={pdfDocument} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 900 ? 1.7 : 0.6} />
          </Document>
        </Row>
        
        <Row className="mt-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfDocument} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
