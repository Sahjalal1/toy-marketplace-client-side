import { useContext } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../../Providers/AuthProviders";

// import 'sweetalert2/src/sweetalert2.scss'


const AddToy = () => {
    const { user } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const photo = form.photo.value;
        const toyname = form.toyname.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(photo, toyname, category, price, rating, sellername, selleremail, quantity, description)

        const newToys = { photo, toyname, category, price, rating, sellername, selleremail, quantity, description }

        fetch('https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })

    }

    return (
        <div className="h-auto" style={{ backgroundImage: `url("https://i.ibb.co/fxtgGWZ/abstract-black-texture-background-hexagon-206725-413.jpg")` }}>


            <form onSubmit={handleSubmit} className="w-[80%]  lg:py-10 lg:px-16 mx-auto" >
                <h1 className="text-3xl text-white text-center py-8 lg:py-0 font-extrabold">Add a New Toy</h1>
                {/* img URL div */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">ImageURL</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="ImageURL" className="input input-bordered input-accent w-full font-bold" required />
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
                            <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered input-accent w-full font-bold" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Sub-Category</h1>
                        </label>
                        <label className="input-group">
                            <input  type="text" name="category" placeholder="Sub-Category " className="input input-bordered input-accent w-full font-bold" required />
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
                            <input type="text" name="price" placeholder="Price" className="input input-bordered input-accent w-full font-bold" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Rating</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating " className="input input-bordered input-accent w-full font-bold" required />
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
                            <input defaultValue={user?.displayName
                            } type="text" name="sellername" placeholder="Seller Name" className="font-bold input input-bordered input-accent w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Seller Email</h1>
                        </label>
                        <label className="input-group">
                            <input defaultValue={user?.email} type="text" name="selleremail" placeholder="Seller Email " className="input input-bordered input-accent w-full font-bold" />
                        </label>
                    </div>
                </div>
                {/* Detail description and Available quantity and submit btn*/}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Detail description</h1>
                        </label>
                        <textarea className="textarea textarea-accent font-bold lg:pb-[100px]" name="description" placeholder="Detail description"></textarea>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <h1 className="text-xl text-white font-extrabold">Available quantity</h1>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity " className="input input-bordered input-accent w-full font-bold" />
                        </label>
                        <input className="mt-12 mb-10 lg:mb-0 py-5 text-xl font-semibold  text-black bg-[#52fff3] hover:bg-[#34b4ac] rounded-md" type="submit" value="Add TOY" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddToy;