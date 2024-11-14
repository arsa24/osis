import { Container, Row, Col } from "react-bootstrap";
import CardAgenda from "../components/CardAgenda";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import randa1 from "../assets/randa-1.jpg";
import randa2 from "../assets/randa-2.jpg";
import randa3 from "../assets/randa-3.jpg";
import selasih1 from "../assets/selasih-1.jpg";
import selasih2 from "../assets/selasih-2.jpg";
import selasih3 from "../assets/selasih-3.jpg";
import pkks1 from "../assets/pkks1.jpg";
import pkks2 from "../assets/pkks2.jpg";
import pkks3 from "../assets/pkks3.jpg";
import pkks4 from "../assets/pkks4.jpg";

const HomePage = () => {
  return (
    <>
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-home">
            <Col>
              <h1 className="text-center ttl-home">
                SELAMAT DATANG DI WEBSITE RESMI
                <br />
                SMKS WIRA INFORMATIKA GLOBAL
              </h1>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="d-flex align-items-center flex-column" id="visi-misi">
        <h2 className="judul-section">VISI & MISI</h2>
        <Container>
          <Row>
            <Col>
              <p className="text-justify mt-3">
                Menjadikan OSIS SMKS Wira Informatika Global sebagai organisasi
                yang kompetitif, berkualitas serta sebagai wadah untuk membentuk
                peserta didik yang berkarakter serta peduli terhadap lingkungan
                sekolah.
              </p>
              <ol className="text-justify mt-3">
                <li>
                  Mengoptimalkan peran OSIS sebagai penyelenggara kegiatan
                  sekolah dengan membentuk organisasi yang terstruktur dan
                  sistematis
                </li>
                <li>
                  Menjalin hubungan yang baik dengan seluruh warga sekolah dab
                  ekstrakulikuler di sekolah
                </li>
                <li>
                  Mendorong siswa/i untuk berani memberikan opini dan
                  menyampaikan pendapatnya
                </li>
                <li>Bergotong royong membersihkan sekolah</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sekbid" className="d-flex align-items-center flex-column">
        <h2 className="judul-section">SEKSI BIDANG</h2>
        <Container className="mt-3">
          <Row>
            <Col className="sekbid">
              <p>Seksi Bidang 1</p>
              <h3>Keagamaan dan Akhlak Mulia</h3>
            </Col>
            <Col className="sekbid">
              <p>Seksi Bidang 2</p>
              <h3>Wawasan Kebangsaan dan Bela Negara</h3>
            </Col>
            <Col className="sekbid">
              <p>Seksi Bidang 3</p>
              <h3>Minat dan Bakat</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link to="/sekbid">
                <button className="btn fw-bold">
                  Lihat lainnya{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                  </svg>
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="proker" className="d-flex align-items-center flex-column">
        <h2 className="judul-section">PROGRAM KERJA</h2>
        <Container className="mt-3">
          <Row>
            <Col>
              <Card style={{ width: "20rem" }} className="my-lg-0 my-4">
                <Carousel>
                  <Carousel.Item>
                    <img src={randa1} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={randa2} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={randa3} alt="" className="w-100" />
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="fw-bold">Rabu Nyunda</Card.Title>
                  <Card.Text>
                    Setiap hari selasa para siswa dan siswi memakai pakaian adat
                    Sunda dan melaksanakan makan bersama dengan bekal makan yang
                    dibawa dari rumah.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem" }} className="my-lg-0 my-4">
                <Carousel>
                  <Carousel.Item>
                    <img src={selasih1} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={selasih2} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={selasih3} alt="" className="w-100" />
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="fw-bold">Selasa Bersih</Card.Title>
                  <Card.Text>
                    Selasih atau Selasa Bersih adalah program membersihkan
                    seluruh lingkungan sekolah yang dilaksanakan seminggu sekali
                    atau pada hari selasa.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem" }} className="my-lg-0 my-4">
                <Carousel>
                  <Carousel.Item>
                    <img src={pkks1} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={pkks2} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={pkks3} alt="" className="w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={pkks4} alt="" className="w-100" />
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="fw-bold">
                    Pekan Kreatifitas Kewirausahaan Siswa
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit fugiat delectus placeat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <Link to="/proker">
                <button className="btn fw-bold">
                  Lihat lainnya{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                  </svg>
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="agenda" className="d-flex align-items-center flex-column">
        <h2 className="judul-section">AGENDA & KEGIATAN</h2>
        <Container className="mt-3">
          <Row>
            <Col className="my-lg-0 my-4">
              <CardAgenda />
            </Col>
            <Col className="my-lg-0 my-4">
              <CardAgenda />
            </Col>
            <Col className="my-lg-0 my-4">
              <CardAgenda />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
