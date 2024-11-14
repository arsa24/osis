import { Container, Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Kolom 1 - Logo dan Deskripsi Singkat */}
          <Col md={4} className="mb-3">
            <h5>OSIS WInG</h5>
            <p>
              Organisasi Siswa Intra Sekolah yang siap mendukung kreativitas dan
              kepemimpinan siswa.
            </p>
          </Col>

          {/* Kolom 2 - Link Navigasi */}
          <Col md={4} className="mb-3">
            <h5>Navigasi</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="/proker" className="text-light">
                  Proker
                </a>
              </li>
              <li>
                <a href="/event" className="text-light">
                  Event
                </a>
              </li>
            </ul>
          </Col>

          {/* Kolom 3 - Media Sosial */}
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="#" className="text-light me-3">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-light me-3">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} OSIS WInG. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
