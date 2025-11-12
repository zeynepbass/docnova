import React from "react";
import { Row, Col } from "antd";
import {Link} from "react-router-dom"
const imageBottom = [
  { id: 1, src: "/assets/image002.png", alt: "Resim 1" , href:"https://www.youtube.com/?app=desktop&hl=tr"},
  { id: 2, src: "/assets/image003.png", alt: "Resim 2" , href:"https://tr.linkedin.com/"},
  { id: 3, src: "/assets/image005.png", alt: "Resim 3", href:"https://tr.pinterest.com/"},
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        backgroundColor: "#f0f5ff",
        width: "100%",
      }}
    >
      <div style={{padding:"5px"}}>
      <Row
        justify="space-between"
        align="middle"
        wrap
        gutter={[16, 16]}
      >
        <Col xs={24} sm={6} style={{ textAlign: "center", textAlignLast: "left" }}>
        <Link to="/docnova">
          <img src="/assets/image006.png" alt="Logo" style={{ height: 50 }} />
          </Link>
        </Col>


        <Col xs={24} sm={18}>
          <Row justify="end" gutter={[10]} wrap>
            {imageBottom.map((img) => (
              <Col key={img.id}>
                <Link to={img.href} target="_blank">
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ height: 25, display: "block" }}
                  loading="lazy"
                />
                </Link>
              
              </Col>
            ))}
          </Row>
        </Col>
      </Row>


      <Row justify="center" style={{ marginTop: 16 }}>
        <Col>
          <p
            style={{
              color: "gray",
              fontSize: "0.8rem",
              margin: 0,
              opacity: 0.5,
              textAlign: "center",
            }}
          >
            &copy; {currentYear} Docnova
          </p>
        </Col>
      </Row>
      </div>
 
    </div>
  );
}
