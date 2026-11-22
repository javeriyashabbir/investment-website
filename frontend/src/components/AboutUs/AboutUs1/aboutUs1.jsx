import './aboutUs1.css'
function AboutUs1(){
    return(
        <div>
            <div>
                <div className="container-fluid  invest-main-container">
                    <div className="row">
                        <div className="col-6 pe-4">
                            <div className='d-flex justify-content-center vh-100 align-items-center'>
                                <div className='my-2'>
                                    <div className="investing-simplified-text ">Investing Simplified </div>
                                <div className='take-command-financial-future-text'>Take command of your financial future and transcend to the life you've always envisioned. Unleash potential and master the art of investment with unparalleled ease and precision.</div>
                                <div className='mt-5 get-started-main-box px-3'>
                                    <div className="d-flex  justify-content-between  pt-2">
                                        <div className='rating-about-us '>4.9 </div>
                                        <div className='get-started-btn text-white mt-2 rounded-pill px-3'> <div>  GET STARTED</div></div>
                                    </div>
                                    <div className="d-flex py-4">
                                        <div className='discover-world-text'>Discover a World of Investment Opportunities: Start Growing Your Wealth Now</div>
                                        <div className='play-btn-div'>
                                            <img className='play-btn' src="/images/play-button.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                </div>
                                
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-6 ">
                            <div className=''>
                                 <div className='ps-5 pt-3 position-relative'>
                                <img className="aboutus-pic1" src="/images/aboutUsPic1.png" alt="" />
                               
                            </div>
                            <div className='position-absolute income-div'>
                                <img className='income-chart-pic' src="/images/income-chart.png" alt="" />
                            </div>

                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs1