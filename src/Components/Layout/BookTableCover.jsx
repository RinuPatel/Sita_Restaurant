import { Link } from "react-router-dom";
const BookTableCover = () => {
    return (
        <>
            <section className="mt-5 bg-color-footer-top">
                <div className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="col-md-12 mt-5 text-center" data-aos="fade-right" data-aos-duration="2000">
                            <h2 className="heading">We Make Delicious & Nutritious Food</h2>
                            <div className="container foot-btn">

                                <Link to="#" class="btn btn-white btn-outline-white d-flex justify-content-center align-items-center mb-5 p-2">Book A Table Now</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BookTableCover;