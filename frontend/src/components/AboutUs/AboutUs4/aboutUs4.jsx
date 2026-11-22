import AnimatedStats from '../../AnimatedStats/AnimatedStats'
import './aboutUs4.css'
function AboutUs4(){
    return(
        <>
        <div>
            <div className='d-flex  justify-content-center main-solution-div '><div className='solution-text rounded-pill px-3 py-1'>SOLUTION</div></div>
            <div><div className='text-center smart-investment-sol-text mt-2'>Smart Investment Solutions</div></div>
            <div><div className='maximize-your-text text-center mt-2'>Maximize your returns with our expertly designed investment strategies.</div></div>
            <div className='text-center mt-5'><img className='investment-sol-img' src="/images/investment-solutions.png" alt="" /></div>
            <div className='d-flex justify-content-center mt-4'>
                <div className='mx-5'>
                    <AnimatedStats></AnimatedStats>
                    
                </div>
               
               
            </div>
            <div className='investors-line-div'><hr /></div>

        </div>
        <div className='pt-5'>
             <div className='d-flex  justify-content-center main-solution-div '><div className='solution-text rounded-pill px-3 py-1'>FEATURES</div></div>
            <div><div className='text-center smart-investment-sol-text mt-2'>Invest with Precision Today</div></div>
            <div><div className=' text-center mt-2 navigatethrough-text'>Navigate through the global investment landscape with our expert guidance, ensuring every decision is calculated and potent.</div></div>
            <div className="row pt-5  d-flex justify-content-center">
                
                 <div className="col-2"> <img src="/images/spotlight-img.png" className='img-fluid spotlight-img' alt="" /></div>

                  <div className="col-2"><img src="/images/master-dynamic-img.png" className='img-fluid spotlight-img' alt="" /></div>
                   <div className="col-2"><img src="/images/elite-oppurtunities.png" className='img-fluid spotlight-img' alt="" /></div>
                 

            </div>
            <div className='d-flex justify-content-center pt-5'>
                <div className='mx-5'><img src="/images/first-logopsium.png" className='first-logopsium' alt="" /></div>
                <div className='mx-5'><img src="/images/logopsium2.png"  className='first-logopsium' alt="" /></div>
                <div className='mx-5'><img src="/images/logopsium3.png"  className='first-logopsium' alt="" /></div>
                <div className='mx-5'><img src="/images/logopsium4.png"  className='first-logopsium' alt="" /></div>
            </div>
           

        </div>
        </>
    )
}
export default AboutUs4