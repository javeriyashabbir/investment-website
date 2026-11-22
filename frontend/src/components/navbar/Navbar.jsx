import { Link } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
function Navbarr(){
    const [showDropDown, setShowDropDown]=useState(false);
    return(
        <>
        <div className="pt-3 ps-4 navbar-class">
            <div className="d-flex">
                <div><img src="/images/footer-first-circle.png" alt="" /></div>
                <Link to="/" className="home-text-header mx-4 pt-2" style={{textDecoration:'none', color:'black'}}>HOME</Link>
                
                {/* <div className="home-text-header mx-4 pt-2"></div> */}
                 <Link to="/blog" className="home-text-header mx-4 pt-2" onClick={()=>setShowDropDown(!showDropDown)} style={{textDecoration:'none', color:'black'}}>PAGES

                 </Link>
                 {showDropDown && (
                    <div className="dropdown-menu">

                        <Link to="/about">About Us</Link>

                        <Link to="/contact">Contact Us</Link>

                        <Link to="/faq">FAQ</Link>

                    </div>
                )}

           
                 
              
                <Link to="/opportunities" className="home-text-header mx-4 pt-2" style={{textDecoration:'none', color:'black'}}>OPPORTUNITIES</Link>
                <div className="home-text-header mx-4 pt-2"></div>
                {/* <div className="home-text-header mx-4 pt-2">SERVICES</div> */}
                <Link to="/services" className="home-text-header mx-4 pt-2" style={{textDecoration:'none', color:'black'}}>SERVICES</Link>
                <Link to="/about2"className="home-text-header mx-4 pt-2" style={{textDecoration:'none', color:'black'}}>ABOUT</Link>
            </div>

        </div>


        </>

    )
}
export default  Navbarr