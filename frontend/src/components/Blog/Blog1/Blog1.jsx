import { Link } from 'react-router-dom'
import './Blog1.css'
function Blog1(){
    return(
        <>
        <div>
            <div className="container invest-main-container">
                <div className="row">
                    <div className="col-6 blog-text-column">
                        <div  className='blog-text'>Blog</div>
                        <div className='take-cntrl-text pt-2'>Take control of your financial future and achieve the life you’ve always dreamed of.</div>
                    </div>
                    <div className="col-6">
                        <img src="/public/images/blog-img.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 mt-5 ps-5">
                        <div className='d-flex '>
                            <div><img src="/public/images/calm-profitable.png" className='calm-profitable-img'  alt="" /></div>
                            <div>
                                <div className="d-flex pt-2 justify-content-between ps-4">
                                    <div className='date-blog'>November 10,2023</div>
                                    <div className='date-blog'>Investment</div>
                                </div>
                                <Link to="/singleblogPage" className="tips-for-staying-text pt-2 ps-3" style={{textDecoration:'none', color:'black'}}>Tips for staying Calm and Profitable</Link>
                               
               
                                <div className=''></div>
                            </div>

                        </div>
                        {/*  */}
                        <div className='d-flex my-4'>
                            <div><img src="/public/images/mastering-art.png" className='calm-profitable-img' alt="" /></div>
                            <div>
                                <div className="d-flex  pt-2 justify-content-between ps-4">
                                    <div className='date-blog'>November 10,2023</div>
                                    <div className='date-blog'>Investment</div>
                                </div>
                                <div className='tips-for-staying-text pt-2 ps-3'>Mastering the Art of Value Investing</div>
                            </div>

                        </div>
                        {/*  */}
                         <div className='d-flex my-4'>
                            <div><img src="/public/images/spread-risk.png" className='calm-profitable-img' alt="" /></div>
                            <div>
                                <div className="d-flex  pt-2 justify-content-between ps-4">
                                    <div className='date-blog'>November 10,2023</div>
                                    <div className='date-blog'>Investment</div>
                                </div>
                                <div className='tips-for-staying-text pt-2 ps-3'>How to Spread Risk and Boost Returns</div>
                            </div>

                        </div>
                        {/*  */}
                         <div className='d-flex my-4'>
                            <div><img src="/public/images/long-term-wealth.png" className='calm-profitable-img' alt="" /></div>
                            <div>
                                <div className="d-flex  pt-2 justify-content-between ps-4">
                                    <div className='date-blog'>November 10,2023</div>
                                    <div className='date-blog'>Investment</div>
                                </div>
                                <div className='tips-for-staying-text pt-2 ps-3'>Strategies for Long-Term Wealth Building</div>
                            </div>

                        </div>
                        {/*  */}
                    </div>
                    {/*  */}
                    <div className="col-1"></div>
                    <div className="col-5 ps-5 mt-5">
                        <div>
                            <div className='recent-post-btn rounded-pill px-1 py-1 text-center'>RECENT POST</div>
                            <div className='tips-forstaying-calm-text mt-3'>Tips for Staying Calm and Profitable</div>
                            <div className='tips-forstaying-calm-text mt-3'>Tips for Staying Calm and Profitable</div>
                            <div className='tips-forstaying-calm-text mt-3'>How to Spread Risk and Boost Returns</div>
                            <div className='tips-forstaying-calm-text mt-3'>Tips for Staying Calm and Profitable</div>
                            <div className='tips-forstaying-calm-text my-3'>Investment Strategies for Long-Term Wealth Building</div>
                            <Link to="/services" className="recent-post-btn rounded-pill px-1 py-1 text-center mt-5" style={{textDecoration:'none', color:'black'}}>OUR SERVICES</Link>
                            {/* <div className='recent-post-btn rounded-pill px-1 py-1 text-center mt-4'>OUR SERVICES</div> */}
                            <div className='mt-5 advvisory-box py-3 ps-3'>
                                <div className="d-flex">
                                    <div><img src="/public/images/dot-icons.png" className='dot-icon-blog' alt="" /></div>
                                    <div className='ps-2 investment-advisory-text pt-1'>Investment Advisory</div>

                                </div>
                                {/*  */}
                                <div className="d-flex mt-2">
                                    <div><img src="/public/images/dot-icons.png"  className='dot-icon-blog' alt="" /></div>
                                    <div className='ps-2 investment-advisory-text pt-1'>Portfolio Management</div>

                                </div>
                                {/*  */}
                                <div className="d-flex mt-2">
                                    <div><img src="/public/images/dot-icons.png"  className='dot-icon-blog' alt="" /></div>
                                    <div className='ps-2 investment-advisory-text pt-1'>Mutual Funds and ETFs</div>

                                </div>
                                {/*  */}
                                 <div className="d-flex mt-2">
                                    <div><img src="/public/images/dot-icons.png"  className='dot-icon-blog' alt="" /></div>
                                    <div className='ps-2 investment-advisory-text pt-1'>Financial Planning</div>

                                </div>
                                {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Blog1