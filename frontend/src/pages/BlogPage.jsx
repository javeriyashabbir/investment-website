import { Container } from "react-bootstrap"
import Blog1 from "../components/Blog/Blog1/Blog1"
import Navbarr from "../components/navbar/Navbar"
import AboutUs6 from "../components/AboutUs/AboutUs6/AboutUs6"
import Footer from "../components/Footer/Footer"

function BlogPage(){
    return(
        <>
        <Container>
            <Navbarr>

            </Navbarr>
        </Container>
         <Container>
            <Blog1>

            </Blog1>
        </Container>
        <Container  className="position-relative">
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
export default BlogPage