import { Link } from "react-router-dom";
const Blog = () => {
    return (
        <>
            <section>
                <div className="container chef-section">
                    <div className="row justify-content-center align-items-center h-100 mt-5 title-section">
                        <div className="col-12 col-md-12 text-center mb-5 pb-2" data-aos="fade-right" data-aos-duration="2000" >
                            <span class="subheading ">𝓑𝓵𝓸𝓰</span>
                            <h2 class="mb-4">Recent Blog</h2>
                        </div>
                    </div>
                    <div className="row g-3" data-aos="fade-up-right" data-aos-duration="2000">
                        <div className="col-md-4  ">
                            <div className="blog">
                                <Link to="#" className="img-bg" style={{ backgroundImage: 'url("images/image_3.jpg")' }}></Link>
                                <div className="text px-4 pt-3">
                                    <div className="meta p-2 d-flex justify-content-between">
                                        <Link to="#">Augest 3, 2020</Link>
                                        <Link to="#">Admin</Link>
                                    </div>
                                    <h3 className="heading">Even the all-powerful Pointing has no control about the blind texts</h3>
                                    <div class="btn-blog d-flex justify-content-between" >
                                        <a href="#" class="float-left read btn btn-bg mb-3">Read more</a>
                                        <a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="blog">
                                <Link to="#" className="img-bg" style={{ backgroundImage: 'url("images/image_2.jpg")' }}></Link>
                                <div className="text px-4 pt-3">
                                    <div className="meta p-2 d-flex justify-content-between">
                                        <Link to="#">June 20, 2020</Link>
                                        <Link to="#">Admin</Link>
                                    </div>
                                    <h3 className="heading">Even the all-powerful Pointing has no control about the blind texts</h3>
                                    <div class="btn-blog d-flex justify-content-between">
                                        <a href="#" class="float-left read btn btn-bg mb-3">Read more</a>
                                        <a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 5</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="blog">
                                <Link to="#" className="img-bg" style={{ backgroundImage: 'url("images/image_1.jpg")' }}></Link>
                                <div className="text px-4 pt-3">
                                    <div className="meta p-2 d-flex justify-content-between">
                                        <Link to="#">July 13, 2020</Link>
                                        <Link to="#">Admin</Link>
                                    </div>
                                    <h3 className="heading">Even the all-powerful Pointing has no control about the blind texts</h3>
                                    <div class="btn-blog d-flex justify-content-between">
                                        <a href="#" class="float-left read btn btn-bg mb-3">Read more</a>
                                        <a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 5</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;