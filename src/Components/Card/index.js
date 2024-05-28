const Card = ({ img, name, feedback }) => {
    return (
        <>
            <div class="container">
                <div class="row g-3 justify-content-center align-items-center">
                    <div class="col-12 col-lg-4">
                        <div class="d-flex justify-content-center align-item-center">
                            <div class="card p-3" >
                                <img src={img}
                                    class="card-img-top" alt="testimonial text" />
                                {/* <img src="images/person_1.jpg"/> */}

                                <div class="card-body">
                                    <p class="card-title text-white" style={{ dontSize: "larger" }}>{name}</p>
                                    <p class="card-text">{feedback}</p>
                                    <div class="mt-3">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>

                                        <i class="fa-solid fa-star"></i>

                                        <i class="fa-solid fa-star"></i>

                                        <i class="far fa-star"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;