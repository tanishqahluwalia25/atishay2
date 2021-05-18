import {
  Navbar as BNavbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default function Navbar() {
  return (
    <BNavbar className=" px-lg-5 m-auto" style={{zIndex:"200"}} expand="lg" variant="light" bg="light">
      <p className="px-5 h1 display-6 text-uppercase">Atishay Jain</p>
      <BNavbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />
      <BNavbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end px-5" style={{ width: "100%" }}>
          <Nav.Link
            className="px-4 font-weight-light "
            style={{ fontSize: "20px" }}
            href="#about"
          >
            About Me
          </Nav.Link>
          <Nav.Link
            className="px-4 font-weight-light "
            style={{ fontSize: "20px" }}
            href='#courses'
          >
            Courses
          </Nav.Link>
          <Nav.Link
            className="px-4 font-weight-light "
            style={{ fontSize: "20px" }}
            href='#events'
          >
            Events
          </Nav.Link>
          <Nav.Link
            className="px-4 font-weight-light "
            style={{ fontSize: "20px" }}
            href='#newsletter'
          >
            Newsletter
          </Nav.Link>
          <NavDropdown
            title="Podcasts"
            style={{ fontSize: "20px" }}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className="pod-y" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UClbUR0JkPpwsigg1gwrU4Hg">Youtube</NavDropdown.Item>
            <NavDropdown.Item className="pod-s" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/show/6ocA2nIJSXP6NLKFKx24uT">Spotify</NavDropdown.Item>
            {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
}
