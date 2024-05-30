import { Link } from "react-router-dom";
import BookTableCover from "./BookTableCover";

const Footer = () => {
    return (
        <>
           
            <footer className="bg-color">
                <div className="container footer-section ">
                    <div className="row  mt-5" data-aos="fade-right" data-aos-duration="2000">
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-1 mt-3">
                                <h3 className="heading text-white">SitaRam</h3>
                                <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                <ul class="list-unstyled  mt-3 d-flex justify-contant-center mx-2 my-2 mb-3">
                                    <li class="mx-2" ><a href="#"><i class="fa-brands  fa-square-twitter"></i></a></li>
                                    <li class="mx-2"><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
                                    <li class="mx-2"><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-1 mt-3">
                                <h3 className="heading text-white">Open Hours</h3>
                                <ul className="list-unstyled mt-5">
                                    <li className="d-flex">  <span className="text-white">Monday</span> <span>9:00 - 24.00</span> </li>
                                    <li className="d-flex">  <span className="text-white">Tuesday</span> <span>9:00 - 24.00</span> </li>
                                    <li className="d-flex">  <span className="text-white">Wednesday</span> <span>9:00 - 24.00</span> </li>
                                    <li className="d-flex">  <span className="text-white">Thursday</span> <span>9:00 - 24.00</span> </li>
                                    <li className="d-flex">  <span className="text-white">Friday</span> <span>9:00 - 24.00</span> </li>
                                    <li className="d-flex">  <span className="text-white">Saturday</span> <span>9:00 - 24.00</span> </li>
                                    <li className="d-flex">  <span className="text-white">Sunday</span> <span>9:00 - 24.00</span> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-1 mt-3">
                                <h3 className="heading text-white">Our Service</h3>
                                <div className="res-service mt-5">

                                    <p>Serve healthi Food</p>
                                    <p>Available 24*7 hourse</p>
                                    <p>Online and mobile servie</p>
                                    <p>Table reservations</p>
                                    <p>Family style service</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-1 mt-3">
                                <h3 className="heading text-white">NEWSLETTER</h3>
                                <div>
                                    <div className="mt-5">
                                        <p>Far far away, behind the word mountains, far from the countries.</p>
                                        <form action="">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-2 text-center form-input " placeholder="Enter email address" />
                                                <button type="submit"  className="from-control submit px-3 text-center" >Subscribe </button>
                                            </div>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="make-since  bg-color-footer-top" > 
                <div className="row">
                    <div className="col-md-12 text-center p-3" >
                        <h3 className="text-small" style={{fontSize:"18px",fontWeight:"bolder"}}>This website made by @RinuPatel</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;
