import { Container, Navbar } from "react-bootstrap"
import AboutUs1 from "../components/AboutUs/AboutUs1/aboutUs1"
import AboutUs2 from "../components/AboutUs/AboutUs2/aboutUs2"
import AboutUs3 from "../components/AboutUs/AboutUs3/aboutUs3"
import AboutUs4 from "../components/AboutUs/AboutUs4/aboutUs4"
import AboutUs5 from "../components/AboutUs/AboutUs5/AboutUs5"
import AboutUs6 from "../components/AboutUs/AboutUs6/AboutUs6"
import Footer from "../components/Footer/Footer"
import Navbarr from "../components/navbar/Navbar"

function AboutUsPage(){
   return (
    <>
    <Container fluid>
      <Navbarr>
        
      </Navbarr>
    </Container>

  <Container fluid>
    <AboutUs1>

        </AboutUs1>

  </Container>
  <Container fluid>
    <AboutUs2>

    </AboutUs2>
  </Container>
  <Container fluid>
    <AboutUs3>
      
    </AboutUs3>
  </Container>
  <Container fluid>
    <AboutUs4></AboutUs4>
  </Container>
  <Container>
    <AboutUs5>
      
    </AboutUs5>
  </Container>
  <Container className="position-relative">
    <AboutUs6>

    </AboutUs6>
  </Container>
  <Container>
    <Footer>
      
    </Footer>
  </Container>
        

    
    </>
   )

}
export default  AboutUsPage