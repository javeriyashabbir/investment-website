import { Container } from "react-bootstrap";
import ContactUs1 from "../components/ContactUs/ContactUs1/ContactUs1";
import Navbarr from "../components/navbar/Navbar"
import Footer from "../components/Footer/Footer"

function ContactUs(){
    return(
        <>
        <Container>
            <Navbarr>


            </Navbarr>
        </Container>
        <Container>
            <ContactUs1>

            </ContactUs1>

        </Container>
        <Container>
            <Footer></Footer>
        </Container>
        </>
    )
}
export default  ContactUs