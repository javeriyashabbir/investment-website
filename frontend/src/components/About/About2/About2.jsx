import './About2.css'
function About2(){
    return(
        <>
        <div>
            <div className='container'>
                <div className="row investment-portion">
                    <div className="col-6">
                        <div className='text-center'><img src="/images/investment.png" className='investment-2-page' alt="" /></div>

                    </div>
                    {/*  */}
                    <div className="col-6">
                        <div className='discover-text'>Discover a World of Investment Opportunities</div>
                        <div className='lorempage2-text pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className='d-flex pt-3'>
                            <div className='pe-3'>
                                <div className='ut-enim-text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                <div className='pt-2 ut-enim-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                            </div>
                            <div><img src="/images/investmentpage2.png" className='investmentpg-2-img' alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}
export default About2