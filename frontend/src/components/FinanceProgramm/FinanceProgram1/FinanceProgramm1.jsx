import './FinanceProgramm1.css'
function FinanceProgram(){
    return(
        <>
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-6 finance-programm-column">
                         <div className=''>
                        <div className='opportunities-text'>Finance Program</div>
                        <div className='take-command-text'>Seize the opportunity to control your financial destiny and live the life you've always envisioned.</div>
                    </div>
                    </div>
                    {/*  */}
                    <div className="col-6">
                        <div><img src="/images/financeProgram-img.png" className="img-fluid" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default  FinanceProgram