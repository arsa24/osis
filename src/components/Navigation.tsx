import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3 px-lg-5" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" className="ttl-nav">
            OSIS WInG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 nvmn align-items-center">
                <div>
                  <NavLink
                    to="./"
                    style={({ isActive }) => {
                      return {
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                    className="navlink"
                  >
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="./proker"
                    className="navlink"
                    style={({ isActive }) => {
                      return {
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                  >
                    Proker
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="./event"
                    className="navlink"
                    style={({ isActive }) => {
                      return {
                        opacity: isActive ? 1 : 0.6,
                      };
                    }}
                  >
                    Event
                  </NavLink>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ opacity: 0.6 }}
                    variant="link"
                    className="px-0"
                    id="dropdown-about-us"
                  >
                    Tentang
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={NavLink}
                      to="./bidang"
                      className="navlink"
                    >
                      Sekbid
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="./logo" className="navlink">
                      Logo
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={NavLink}
                      to="./history"
                      className="navlink"
                    >
                      History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>

              {/* Join Button */}
              <Nav>
                <a href="#" className="join-btn">
                  <button className="">Join</button>
                </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
