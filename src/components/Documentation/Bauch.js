import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/../Assets/Bauch.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
"https://raw.githubusercontent.com/andresvcc/Dev-Portfolio/master/src/Assets/Bauch.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document file={resumeLink} className="d-flex flex-column justify-content-center align-items-center">
            {[...new Array(19)].map((val, index)=><Page key={index} pageNumber={index + 1} scale={width > 786 ? 1.7 : 0.6} />)}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
