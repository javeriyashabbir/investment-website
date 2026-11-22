import { Container } from "react-bootstrap"
import About1 from "../components/About/About1/About1"
import About2 from "../components/About/About2/About2"
import AboutUs4 from "../components/AboutUs/AboutUs4/aboutUs4"
import Footer from "../components/Footer/Footer"
import Navbarr from "../components/navbar/Navbar"

function About2page(){
    return(
        <>
        <Container className="pt-3">
            <Navbarr>

            </Navbarr>
        </Container>
        <Container className="pt-5">
            <About1>
                
            </About1>


        </Container>
        <Container fluid>
            <About2>

            </About2>
        </Container>
        <Container className="pt-5">
            <AboutUs4>

            </AboutUs4>
        </Container>
        <Container>
            <Footer>

            </Footer>
        </Container>
        </>

    )
}
export default  About2page