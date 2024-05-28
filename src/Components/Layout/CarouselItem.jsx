import React from 'react'
import PropTypes from 'prop-types';

export default function CarouselItem({ isActive, backgroundImage, subheading, subheading2, title }) {
    CarouselItem.propTypes = {
        isActive: PropTypes.bool,
        backgroundImage: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subheading2: PropTypes.string.isRequired,
    };
    
    CarouselItem.defaultProps = {
        isActive: false,
    };

    const itemClass = `carousel-item${isActive ? 'active' : ''}`
    return (
        <>
            <div className={itemClass} data-bs-interval="2000" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="item-slider">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="slider-text justify-content-center align-items-center">
                            <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                                <div className="text w-100 mt-5 p-5 text-center">
                                    <span className="subheading text-white">{subheading}</span>
                                    <h1 className="text-white mt-4 p-2">{title}</h1>
                                    <span className="subheading2">{subheading2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

