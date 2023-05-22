

const OurService = () => {
    return (
        <div className="bg-blue-400 text-white my-10">
            <h1 className="text-3xl lg:text-4xl pt-9 pb-6 lg:my-10 text-center">Our Service</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 w-[80%] gap-7 justify-center pb-10 mx-auto">
                <div className=" lg:w-full lg:mx-auto lg:text-center">
                    <img className="w-full h-60 rounded-2xl" src="https://i.ibb.co/10Yc0vh/images.png" alt="" />
                    <h1 className="text-2xl mt-3">Woridwide Shipping</h1>
                    <p className="text-xl mb3">On Order Over $50</p>
                    <div className="py-1 mt-2 bg-[#132927] lg:hidden">
                   </div>
                </div>
                <div className="w-full mx-auto text-center">
                    <img className="w-full h-60 rounded-2xl" src="https://i.ibb.co/85zZTGv/elegant-girl-working-customer-service-vector-21310702.jpg" alt="" />
                    <h1 className="text-2xl mt-3">12 X 6 Free Support</h1>
                    <p className="text-xl mb-3">Online Support</p>
                    <div className="py-1 mt-2 bg-[#132927] lg:hidden"></div>
                </div>
                <div className="w-full mx-auto text-center">
                    <img className="w-full h-60 rounded-2xl" src="https://i.ibb.co/XtS0P2y/download-3.jpg" alt="" />
                    <h1 className="text-2xl mt-3">Special Gift Cards</h1>
                    <p className="text-xl mb-3">GIve The Perfect Gift</p>
                    <div className="py-1 mt-2 bg-[#132927] lg:hidden"></div>
                </div>
                <div className="w-full mx-auto text-center">
                    <img className="w-full h-60 rounded-2xl" src="https://i.ibb.co/1XCXj21/images-3.jpg" alt="" />
                    <h1 className="text-2xl mt-3">Money Back Guarantee</h1>
                    <p className="text-xl mb-3">100% Secure Payment</p>
                    <div className="py-1 mt-2 mb-5 bg-[#132927] lg:hidden"></div>
                </div>
            </div>
        </div>
    );
};

export default OurService;