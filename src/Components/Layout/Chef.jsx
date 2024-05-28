import ChefCard from "../ChefCard/Index";
import ChefItem from "../../Dummy/ChefItems"
const Chef = () => {
    return (
        <>
            <section className="">
                <div className="container chef-section">
                    <div className="row justify-content-center align-items-center h-100 mt-5 title-section">
                        <div className="col-12 col-md-12 text-center mb-5 pb-2" data-aos="fade-right" data-aos-duration="2000" >
                            <span class="subheading ">𝓒𝓱𝓮𝓯</span>
                            <h2 class="mb-4">Our Master Chef</h2>
                        </div>
                    </div>
                    <div className="row chef-content g-5" data-aos="flip-left" data-aos-duration="2000" >
                        {ChefItem.items.map((data,index)=>(
                        <ChefCard img={data.img} name={data.name} title={data.title} content={data.content}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chef;