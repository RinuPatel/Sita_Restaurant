import Card from "../Card";
import CustomerFeedback from "../../Dummy/CustomerFeedback";
const Testimony = () => {
    return (
        <>
            <section>
                <div className="container-fluid testimony-section ">
                    <div className="row justify-content-center align-items-center h-100 mt-5 title-section">
                        <div className="overlay">
                            <div className="col-12 col-md-12 text-center mb-5 pb-2 mt-5" data-aos="zoom-in" data-aos-duration="10000" >
                                <span class="subheading ">𝓣𝓮𝓼𝓽𝓲𝓶𝓸𝓷𝔂</span>
                                <h2 class="mb-4 heading text-white">Happy Customer</h2>


                                <div id="carouselExampleIndicators " class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        
                                        {CustomerFeedback.data.map((_, index) => (
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={index}
                                                className={index === 0 ? 'active' : ''}
                                                aria-current={index === 0 ? 'true' : 'false'}
                                                aria-label={`Slide ${index + 1}`}
                                                key={index}
                                            ></button>
                                        ))}
                                    </div>
                                    <div class="carousel-inner">

                                        {CustomerFeedback.data.map((item, index) => (

                                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                                                    <Card
                                                        img={item.img}
                                                        name={item.name}
                                                        feedback={item.feedback}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Testimony;