const ChefCard = ({img,name,title,content}) => {
    return (
        <>
            <div className="col-md-6 col-lg-3 ">
                <div className="staff " >
                    <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
                    <div className="text px-4 p-2 pt-2">
                        <h3 className="mt-3">{name}</h3>
                        <span class="position mb-2">{title}</span>
                        <div className="sub-content-chef">
                            <p>{content}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

 export default ChefCard;