
import { Container } from "react-bootstrap"
import Opportunities1 from "../components/opportunities/Opportunities"
import Navbarr from "../components/navbar/Navbar"
import Footer from "../components/Footer/Footer"

function OpportunitiesPage(){
    return(
        <>
        <Container className="pt-3">
            <Navbarr>

            </Navbarr>
        </Container>
        <Container>
            <Opportunities1>

            </Opportunities1>

        </Container>
        <Container>
            <Footer>
                
            </Footer>
        </Container>
        </>
    )
}
export default  OpportunitiesPage