import Gallery from "./Gallery/Gallery";
import ByCategory from "./byCategory/byCategory";




const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  
    return (
        <div>
            {/* ---------Banar Section start--------------- */}
            <div className="hero h-[600px]" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/wooden-car-toys-blue-background-car-toys-background_423236-194.jpg?size=626&ext=jpg&ga=GA1.1.1128138535.1684335108&semt=ais")` }}>
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* --------- Banar Section end --------------- */}

            {/* --------- Gallery Section start --------------------*/}

           <Gallery></Gallery>

            {/* --------- Gallery Section end --------------------*/}


            <ByCategory></ByCategory>

        </div >
    );
};
{/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
export default Home;