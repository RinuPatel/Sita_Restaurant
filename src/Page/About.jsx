import Cover from "../Components/Layout/Cover";
import { Link } from "react-router-dom";
import Testimony from "../Components/Layout/Testimony";
import Footer from "../Components/Layout/Footer";

const About = () => {
    return (
        <>
            <Cover page={"About"} />
            <section>
                <div className="container about-section">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="img img-2 w-100 mr-md-2 bg_1" ></div>
                            <div className="img img-2 w-100 bg_2" ></div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="row  h-100 ">
                                <div className="col-12 col-md-12 p-5" data-aos="fade-right" data-aos-duration="2000" >
                                    <span class="subheading ">𝓣𝓱𝓲𝓼 𝓲𝓼 𝓸𝓾𝓻 𝓼𝓮𝓬𝓻𝓮𝓽𝓼</span>
                                    <h1 class="mb-4">Perfect Ingredients</h1>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                        the Semantics, a large language ocean.
                                    </p>
                                    <button className="btn btn-learn-more mt-3">Learn More</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section className="img bg-image">
                <div className="row d-ms-flex align-items-center justify-content-center">
                    <div className="overlay"></div>
                    <div className="col-lg-10 text-white">
                        <div className="row d-md-flex align-items-center item-content" style={{ marginTop: "5rem" }}>
                            <div className="col-md d-flex justify-content-center" >
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number">100</strong>
                                        <p>Tasty Dishes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center" >
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number">3000</strong>
                                        <p>Dishes Served</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center" >
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number">10</strong>
                                        <p>Restaurants</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center" >
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number">10000</strong>
                                        <p>Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-color-footer-top ">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-12 mt-5 text-center" data-aos="fade-right" data-aos-duration="2000">
                            <h2 className="heading">We Make Delicious & Nutritious Food</h2>
                            <div className="container foot-btn">

                                <Link to="#" class="btn btn-white btn-outline-white d-flex justify-content-center align-items-center mb-5 p-2">Book A Table Now</Link>
                            </div>

                        </div>
                    </div>
                </div>
            <Testimony/>
            </section>
            <div style={{marginTop:"20px"}}>

            <Footer/>
            </div>

        </>
    )
}

export default About;