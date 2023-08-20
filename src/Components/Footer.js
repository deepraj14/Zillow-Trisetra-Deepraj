import { Container, Row, Col } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedinIn ,faTwitter} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
      <footer className="mt-5 bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <img src={"https://d33wubrfki0l68.cloudfront.net/5a52563da5196da29e67d64c3b6bdcb303d3a4d1/68ebd/_astro/logo-primary.7848484f_1c8y86.svg"} alt="Brand Logo" height="50" />
              <p className="mt-3"><h6>The Easiest Path to 3D Modeling for Professionals!</h6></p>
            </Col>
            <Col md={8} className="text-center">
              <p className="mb-0">Connect with us:</p>
              <div className="social-icons  d-flex m-2 justify-content-center">
              <h3 className='m-3'><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></h3>
              <h3 className='m-3'><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ffffff",}} /></h3>
              <h3 className='m-3'><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></h3>
              
              </div>
              <p className="mt-3"></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;