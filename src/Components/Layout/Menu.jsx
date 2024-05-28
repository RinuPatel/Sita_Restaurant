import React from 'react'
import MenuItems from '../../Dummy/MenuItems'

export default function Menu() {
    return (
        <>
            <section className="common-section menu-section">
                <div className="container mt-5">
                    <div className=" row justify-content-center align-items-center h-100 mt-5">
                        <div className="col-12 text-center mb-5 pb-2" data-aos="fade-right" data-aos-duration="2000" >
                            <span class="subheading">Specialties</span>
                            <h2 class="mb-4 ">Our Menu</h2>
                        </div>
                    </div>
                    <div className="row">
                        {MenuItems.menu.map((category, index) => (
                            <>
                                <div className="col-md-6 col-lg-4  ">
                                    <div className="menu-wrap " key={index} data-aos="fade-right" data-aos-duration="1000">
                                        <div className="heading-menu text-center mb-1 mt-3">
                                            <h4>{category.category}</h4>
                                        </div>
                                        {category.items.map((item, index) => (
                                            <div className="menus border-bottom">
                                                <div className="row p-2">
                                                    <div className="col-4 justify-content-center align-items-center">
                                                        <img className='menu-img img' src={item.images} alt="" />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className="text">
                                                            <div className="d-flex">
                                                                <div className="one-half">
                                                                    <h3>{item.name}</h3>
                                                                </div>
                                                                <div className="one-forth mx-3">
                                                                    <span className="price ">₹{item.price}</span>
                                                                </div>
                                                            </div>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div >
                                </div >  
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
