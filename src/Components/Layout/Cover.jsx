import { Link } from "react-router-dom";

const Cover = ({page})=>{
    return(
        <>
        <section className="cover-section">
            <div className="overlay"></div>
            <div className="container">
                <div className="row  align-items-center justify-content-center text-white cover-text" >
                    <div className="col-md-12 text-center" style={{marginTop:"22rem"}} data-aos="fade-In" data-aos-duration="2000">
                        <h1 className="mb-2">{page}</h1>
                        <p className=""><span><Link to="/">Home  <i class="fa fa-chevron-right"></i></Link></span> <span>{page} <i class="fa fa-chevron-right"></i> </span></p>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
export default Cover;