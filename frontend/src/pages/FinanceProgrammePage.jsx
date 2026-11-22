import { Container } from "react-bootstrap"
import FinanceProgram from "../components/FinanceProgramm/FinanceProgram1/FinanceProgramm1"
import Navbarr from "../components/navbar/Navbar"
import FinanceProgramm2 from "../components/FinanceProgramm/FinanceProgramm2/FinanceProgramm2"
import FinanceProgramm3 from "../components/FinanceProgramm/FinanceProgramm3/FinanceProgramm3"
import Footer from "../components/Footer/Footer"

function FinanceProgramPage(){
    return(
        <>
        <Container className="pt-3">
            <Navbarr>

            </Navbarr>
        </Container>
        <Container>
            <FinanceProgram>

            </FinanceProgram>
        </Container>
        <Container>
            <FinanceProgramm2>
                
            </FinanceProgramm2>
        </Container>
        <Container>
            <FinanceProgramm3>
                
            </FinanceProgramm3>
        </Container>
        <Container>
            <Footer>
                
            </Footer>
        </Container>
        </>
    )
}
export default FinanceProgramPage