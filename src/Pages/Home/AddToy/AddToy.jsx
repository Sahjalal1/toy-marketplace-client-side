

const AddToy = () => {

    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target;
        const photo = form.photo.value;
        const toyname = form.toyname.value;
        const category =form.category.value;
        const price =form.price.value;
        const rating =form.rating.value;
        const sellername =form.sellername.value;
        const selleremail =form.selleremail.value;
        const quantity =form.quantity.value;
        const description =form.description.value;
        console.log(photo, toyname, category, price, rating, sellername, selleremail, quantity, description)
    }

    return (
        <div className="h-auto" style={{ backgroundImage: `url("https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg")` }}>


            <form onSubmit={handleSubmit} className="w-[80%]  lg:py-10 lg:px-16 mx-auto" >
                <h1 className="text-3xl text-center font-extrabold">AddCoffee</h1>
            {/* img URL div */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">ImageURL</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="ImageURL" className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                </div>
            {/* Toy Name and  Sub-Category*/}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Toy Name</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Sub-Category</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Sub-Category " className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                </div>
        {/* Price and  Rating*/}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Price</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Rating</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating " className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                </div>
            {/* Seller Name and Seller Email */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Seller Name</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellername" placeholder="Seller Name" className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Seller Email</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="selleremail" placeholder="Seller Email " className="input input-bordered input-error w-full " />
                        </label>
                    </div>
                </div>
            {/* Detail description and Available quantity and submit btn*/}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Detail description</h1>
                        </label>
                        <textarea className="textarea textarea-error lg:pb-[100px]"  name="description" placeholder="Detail description"></textarea>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Available quantity</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity " className="input input-bordered input-error w-full " />
                        </label>
                        <input className="mt-12 py-5 text-xl bg-white btn-outline btn-error" type="submit" value="Add TOY" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddToy;