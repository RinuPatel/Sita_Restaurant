import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function () {
    useEffect(() => {
        AOS.init({
            duration: 500
        })
    },[])
    return (
        <>
            <section className='hero-wrap'>
                <div className="container-fluit">
                    <div className="hero-sectio  col-12 col-md-12">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

                            <div class="carousel-inner mt-1 w-100 home-slider ">



                                <div class="carousel-item active" data-bs-interval="2000">
                                    <div className="item-slider">
                                        <div class="overlay"></div>
                                        <div className="conatiner">
                                            <div className="slider-text justify-content-center align-items-center ">
                                                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                                                    <div className="text w-100 mt-5 p-5 text-center" data-aos="fade-left" data-aos-delay="500">
                                                        <span className="subheadling text-white">Sita.Ram Restaurant</span>
                                                        <h1 className='text-white mt-4 p-2 ' >𝓒𝓸𝓸𝓴𝓲𝓷𝓰 𝓢𝓲𝓷𝓬𝓮</h1>
                                                        <span className='subheaddling2'>1998</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item " data-bs-interval="2000">
                                    <div className="item-slider" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
                                        <div class="overlay"></div>
                                        <div className="conatiner">
                                            <div className="slider-text justify-content-center align-items-center ">
                                                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                                                    <div className="text w-100 mt-5 p-5 text-center" data-aos="fade-left" data-aos-delay="500">
                                                        <span className="subheadling text-white">Sita.Ram Restaurant</span>
                                                        <h1 className='text-white mt-4 p-2 '>𝓑𝓮𝓼𝓽 𝓠𝓾𝓪𝓵𝓲𝓽𝔂</h1>
                                                        <span className='subheaddling2'>Food</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
