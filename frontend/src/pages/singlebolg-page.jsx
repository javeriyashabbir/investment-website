import { Container } from "react-bootstrap"
import SingleBlog1 from "../components/singleBlog/SingleBlog1/SingleBlog1"
import Navbarr from "../components/navbar/Navbar"
import AboutUs6 from "../components/AboutUs/AboutUs6/AboutUs6"
import Footer from "../components/Footer/Footer"

function SingleBlogPage(){
    return(
        <>
        <Container>
            <Navbarr>

            </Navbarr>
        </Container>
        <Container>
            <SingleBlog1>

            </SingleBlog1>
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
export default SingleBlogPage