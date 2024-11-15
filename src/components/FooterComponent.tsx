import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Link className="text-decoration-none text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white" to="/proker">
                  Proker
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white" to="/event">
                  Event
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li>
                <a
                  href="https://www.instagram.com/osiswing_activity/"
                  className="text-light me-3 text-decoration-none"
                >
                  <i className="bi bi-instagram"></i> Instagram
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
