import React from 'react'
import InputControl from '../Element/InputControl'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


export default function TableBook() {
    const [startDate, setStartDate] = useState(null);
    const [time, setTime] = useState('00:00');

    return (
        <>
            <section className='book-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 p-4 p-md-5 d-flex justify-content-center align-items-center bg-form" data-aos="fade-right" data-aos-duration="2000">
                            <form action="" className="appoinment-form">
                                <h3 className="mb-3 text-center">book your table</h3>
                                <div className="row justify-content-center g-3">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <InputControl placeholder="Name" id="name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <InputControl type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <InputControl placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="input-wrap">
                                                {/* <div class="icon"><span class="fa fa-calendar"></span></div> */}

                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    dateFormat="MM/dd/yyyy"
                                                    placeholderText="Check-In"
                                                    className="form-control book_date"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="input-wrap">
                                                <div class="icon"><span class="fa fa-clock-o"></span></div>
                                                <input
                                                    onChange={setTime}
                                                    placeholder='Time'
                                                    className="form-control book_time"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-field">
                                                <div class="select-wrap">
                                                    <div class="icon"><span class="fa fa-chevron-down"></span></div>
                                                    <select name="" id="" class="form-control select-option">
                                                        <option value="">Guest</option>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                        <option value="">5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class="btn-group ">
                                            <button className='btn btn-submit py-3 px-4 text-capitalize '>book your table now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6 col-lg-8 mt-5 about-bg' data-aos="fade-left" data-aos-duration="2000" >
                            <div className="row">
                                <div className="col-md-12 col-lg-7">
                                    <div className="heading-section">
                                        <span className="subheading">𝓐𝓫𝓸𝓾𝓽</span>
                                        <h2 className='mb-3'>Welcome to SitaRam</h2>
                                    </div>
                                    <div className="pl-lg-3 ml-md-5">
                                        {/* <img src="images/bg_7.jpg" alt="" /> */}
                                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='col-12 col-md-12 private-booking-section'>
                <div className="overlay">
                    <div className="container" > 
                        <div className="row mt-5 d-flex align-items-center justify-content-center">
                            <div className="col-md-12 text-center mt-5" >
                                <span className='sub-heading' data-aos="fade-right" data-aos-duration="2000">Now Booking</span>
                                <h2 className='text-capitalize text-white text-center mt-5 ' data-aos="fade-right" data-aos-duration="2000">Private dinner & happy hours</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
