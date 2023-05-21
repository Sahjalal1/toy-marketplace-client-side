// import react from 'react';



import Slider from "react-slick";

const Gallery = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div className="my-10" style={{ backgroundImage: `url("https://i.ibb.co/68zvjPY/istockphoto-1332097112-170667a.jpg")` }}>
                <h1 className="text-[#52fff3] font-semibold text-center py-5 text-xl lg:text-3xl">Best From Gallery</h1>
            <div className="pb-20 pt-5 px-10 mx-auto">
                <Slider className="lg:w-[70%]  mx-auto" {...settings}>

                    <div className="lg:pl-3">
                        <img className=" h-[250px] " src="https://i.ibb.co/VpSF3G6/istockphoto-150687954-170667a.jpg" alt="Pizza" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/9r6b0hH/images.jpg" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/61vNPNX/images-1.jpg" alt="Pizza" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/VpSF3G6/istockphoto-150687954-170667a.jpg" alt="Pizza" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/VpSF3G6/istockphoto-150687954-170667a.jpg" alt="Pizza" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/VpSF3G6/istockphoto-150687954-170667a.jpg" alt="Pizza" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/VpSF3G6/istockphoto-150687954-170667a.jpg" alt="Pizza" />
                    </div>
                    <div className="lg:pl-3">
                        <img className="h-[250px] " src="https://i.ibb.co/VpSF3G6/istockphoto-150687954-170667a.jpg" alt="Pizza" />
                    </div>
                    

                </Slider>
            </div>
        </div>
    );
};

export default Gallery;




