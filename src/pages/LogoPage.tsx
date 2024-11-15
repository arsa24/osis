import { Container, Row, Col } from "react-bootstrap";
import LogoOSIS from "../assets/logo-osis.png";

function LogoPage() {
  return (
    <div id="logo">
      <Container>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <img src={LogoOSIS} alt="" className="logo" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs="12" lg="6">
            <h3>COLOR</h3>
            <p>
              Warna biru, kuning, dan putih adalah kombinasi warna yang dapat
              menciptakan desain yang menarik dan dinamis. Ketiga warna ini
              memiliki warna simbolis masing masing dan kombinasi mereka dapat
              menciptakan dampak visual yang mencolok dalam desain logo.
            </p>
          </Col>
          <Col xs="12" lg="6">
            <h3>WING</h3>
            <p>
              Filosofi WING atau Wira Informatika Global digambarkan melalui
              simbol sayap, yang mencerminkan visi global, pencapaian,
              kebebasan, kecepatan, dan mobilitas. Sayap melambangkan kemampuan
              organisasi untuk beradaptasi cepat dalam dunia informatika dan
              desain komunikasi visual yang dinamis.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" lg="6">
            <h3>MODERN STYLE</h3>
            <p>
              Gaya modern menekankan kesederhanaan dengan desain yang bersih,
              menghindari detail berlebihan, dan fokus pada elemen penting yang
              merepresentasikan identitas organisasi.
            </p>
          </Col>
          <Col xs="12" lg="6">
            <h3>Line 3</h3>
            <p>
              Filosofi tiga garis melambangkan kesatuan, stabilitas, dan tahapan
              pertumbuhan, merepresentasikan unsur-unsur penting yang saling
              seimbang dan mencerminkan perkembangan dalam suatu perjalanan atau
              proses. 
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs="12" lg="6">
            <h3>FILOSOFI</h3>
            <p>
            Kombinasi warna biru, kuning, dan putih menciptakan kontras visual yang menarik, memberikan harmoni dan keseimbangan. Kuning menambah energi dan keceriaan, sementara biru dan putih membawa ketenangan dan profesionalisme, menghasilkan identitas visual yang unik dan khas.
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Row className="filosofi w-100">
              <Col className="putih">#FFFFFF</Col>
              <Col className="biru">#355C93</Col>
              <Col className="kuning">#FFAD3F</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LogoPage;
