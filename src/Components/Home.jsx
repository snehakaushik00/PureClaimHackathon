import home from "../Images/Home - Copy.jpeg";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ onGetStarted }) => {
  return (
    <section className="home text-center">
      <Row
        className="align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <Col md={6}>
          <img src={home} className="Home" />
          <h1>Welcome to Pure-Claim</h1>
          <p className="lead">Check product claims effortlessly.</p>
          
            <Link to="/verification" className="btn btn-success mt-5">Get Started </Link>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
