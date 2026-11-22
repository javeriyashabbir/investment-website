import { Container } from "react-bootstrap"
import Services1 from "../components/Services/Services1/Services1"
import Navbarr from "../components/navbar/Navbar"
import Service2 from "../components/Services/Service2/Service2"
import Service3 from "../components/Services/Service3/Service3"
import Footer from "../components/Footer/Footer"

function ServicesPage(){
    return(
        <>
        <Container>
            <Navbarr>


            </Navbarr>
        </Container>
        <Container>
            <Services1>

            </Services1>

        </Container>
        <Container>
            <Service2>

            </Service2>
        </Container>
        <Container>
        <Service3>
            
        </Service3>
        </Container>
        <Container>
            <Footer></Footer>
        </Container>
        </>

    )
}
export default  ServicesPage