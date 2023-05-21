import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";



const MyToys = () => {

    const { user } = useContext(AuthContext)

    const [mytoys, setMytoys] = useState([])
 
    const [edit, setEdit] = useState([])




    useEffect(() => {
        fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then((data) => {

                setMytoys(data);
                // navigate(from)
            });
    }, [user]);

    const handelMyToy = event => {
        // console.log(event.target)
        event.preventDefault()
        const form = event.target;
        const id = form.id.value;
        console.log(id)
        // const id = form.id.value;
        const photo = form.photo.value;
        const toyname = form.toyname.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const newToys = { photo, toyname, category, price, rating, sellername, selleremail, quantity, description }

        fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/updatetoy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                
            })

    }

    const handelDelete = id => {
        console.log(id)
        fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/toys/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('user-remover')
                const remaining = mytoys.filter(user=> user._id !== id);

                setMytoys(remaining)
            }
        })
    }


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>TOYS NAME</th>
                            <th>SELLER NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>Update Action</th>
                            <th>Delete  Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys?.map((toy, index) => <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <th>{toy.toyname}</th>
                                <td>{toy.sellername}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <th>
                                    {/* //onClick={() => handel(toy._id)}                                   */}
                                    <label onClick={() => setEdit(toy)} htmlFor="my-modal-5" className="btn btn-outline btn-error">Toys Update</label>

                                </th>
                                <th>
                                    <button onClick={() => handelDelete(toy._id)} className="btn btn-outline btn-error">Toys Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* Put this part before </body> tag updete*/}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <form onSubmit={handelMyToy} className="w-[80%]  lg:py-10 lg:px-16 mx-auto" >
                        <h1 className="text-3xl text-white text-center py-8 lg:py-0 font-extrabold">Add a New Toy</h1>
                        {/* img URL div */}
                        <div className="md:flex mb-7">
                            <div className="form-control md:w-full ">
                                <label className="label">
                                    <h1 className="text-xl text-white font-extrabold">ImageURL</h1>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={edit.photo} type="text" name="photo" placeholder="ImageURL" className="input input-bordered input-accent w-full " />
                                    <input defaultValue={edit._id} type="data" name="id" placeholder="ImageURL" className="input input-bordered input-accent w-full " />
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
                                    <input defaultValue={edit.toyname} type="text" name="toyname" placeholder="Toy Name" className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4">
                                <label className="label">
                                    <h1 className="text-xl text-white font-extrabold">Sub-Category</h1>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={edit.category} type="text" name="category" placeholder="Sub-Category " className="input input-bordered input-accent w-full " />
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
                                    <input defaultValue={edit.price} type="text" name="price" placeholder="Price" className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4">
                                <label className="label">
                                    <h1 className="text-xl text-white font-extrabold">Rating</h1>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={edit.rating} type="text" name="rating" placeholder="Rating " className="input input-bordered input-accent w-full " />
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
                                    <input defaultValue={edit.sellername} type="text" name="sellername" placeholder="Seller Name" className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4">
                                <label className="label">
                                    <h1 className="text-xl text-white font-extrabold">Seller Email</h1>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={edit.selleremail} type="text" name="selleremail" placeholder="Seller Email " className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                        </div>
                        {/* Detail description and Available quantity and submit btn*/}
                        <div className="md:flex mb-7">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <h1 className="text-xl text-white font-extrabold">Detail description</h1>
                                </label>
                                <textarea defaultValue={edit.description} className="textarea textarea-accent lg:pb-[100px]" name="description" placeholder="Detail description"></textarea>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4">
                                <label className="label">
                                    <h1 className="text-xl text-white font-extrabold">Available quantity</h1>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={edit.quantity} type="text" name="quantity" placeholder="Available quantity " className="input input-bordered input-accent w-full " />
                                </label>
                                <input className="mt-12 mb-10 lg:mb-0 py-5 text-xl font-semibold  text-black bg-[#52fff3] hover:bg-[#34b4ac] rounded-md" type="submit" value="Add TOY" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyToys;