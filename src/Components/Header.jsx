import { Navbar, Nav } from "react-bootstrap";
import ReactLogo from "../Images/Home - Copy.jpeg";
import { Link } from "react-router-dom";
import "./VerificationMethod/Header.css"

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="p-3">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">
          <img src={ReactLogo} alt="Logo" width="90" className=" " />{" "}
          <span className="fw-bolder mt-5">Pure-Claim</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto nav-pills  ">
            {/* React Router Link for internal navigation */}
            <Nav.Link as={Link} to="/" className="btn btn-outline-success navpill">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/verification"
            className="btn btn-outline-success navpill"
            >
              Verification
            </Nav.Link>

            {/* Example external link (keeps href) */}
            <Nav.Link as={Link} to="/"
            className="btn btn-outline-success navpill">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/"
            className="btn btn-outline-success navpill" 
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
