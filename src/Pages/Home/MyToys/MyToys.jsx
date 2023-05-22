import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";



const MyToys = () => {

    const { user } = useContext(AuthContext)

    const [mytoys, setMytoys] = useState([])

    const [edit, setEdit] = useState([])
    const [am, setAm] = useState([])




    useEffect(() => {
        fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then((data) => {

                setMytoys(data);
                // navigate(from)
            });
    }, [user, am]);

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

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/updatetoy/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newToys)
                })
                    .then(res => res.json())
                    .then(data => {
                        setAm(data)
                        console.log(data);
                    })
                Swal.fire('Update!', '', 'success')
            }
            else if (result.isDenied) {

                Swal.fire('Changes are not Update', '', 'info')
                return;
            }
        })



    }

    const handelDelete = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Good job!',
                                'You clicked the button!',
                                'success'
                            )
                            const remaining = mytoys.filter(user => user._id !== id);

                            setMytoys(remaining)
                        }
                    })
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
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
                            <th>CATEGORY</th>
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
                                    <label onClick={() => setEdit(toy)} htmlFor="my-modal-3" className="btn btn-outline btn-error">Toys Update</label>

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

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelMyToy} className="w-[80%]  lg:py-10 lg:px-16 mx-auto" >
                        <h1 className="text-3xl  text-center py-8 lg:py-0 font-serif">Add a New Toy</h1>
                        {/* img URL div */}
                        <div className="md:flex lg:mb-3">
                            <div className="form-control md:w-full hidden">
                                <label className="label">
                                    <h1 className="text-xl  font-serif">ImageURL</h1>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={edit.photo} type="text" name="photo" placeholder="ImageURL" className="input input-bordered input-accent w-full " />
                                    <input hidden defaultValue={edit._id} type="data" name="id" placeholder="ImageURL" className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                        </div>
                        {/* Toy Name and  Sub-Category*/}
                        <div className="md:flex lg:mb-3">
                            <div className="form-control md:w-1/2 hidden">
                                <label className="input-group">
                                    <input defaultValue={edit.toyname} type="text" name="toyname" placeholder="Toy Name" className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4 hidden">
                                <label className="input-group">
                                    <input defaultValue={edit.category} type="text" name="category" placeholder="Sub-Category " className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                        </div>
                        {/* Price and  Rating*/}
                        <div className="md:flex lg:mb-3">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <h1 className="text-xl font-serif">Price</h1>
                                </label>
                                <label className="input-group w-full">
                                    <input defaultValue={edit.price} type="text" name="price" placeholder="Price" className="input input-bordered input-accent w-full " />
                                    <input defaultValue={edit.rating} hidden type="text" name="rating" placeholder="Rating " className="input input-bordered input-accent w-full " />
                                </label>
                            </div>

                        </div>
                        {/* Seller Name and Seller Email */}
                        <div className="md:flex lg:mb-3 ">
                            <div className="form-control md:w-1/2 hidden">
                                <label className="input-group">
                                    <input defaultValue={edit.sellername} type="text" name="sellername" placeholder="Seller Name" className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4 hidden">
                                <label className="input-group">
                                    <input defaultValue={edit.selleremail} type="text" name="selleremail" placeholder="Seller Email " className="input input-bordered input-accent w-full " />
                                </label>
                            </div>
                        </div>
                        {/* Detail description and Available quantity and submit btn*/}
                        <div className="md:flex lg:mb-3">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <h1 className="text-xl font-serif">Detail description</h1>
                                </label>
                                <textarea defaultValue={edit.description} className="textarea textarea-accent lg:pb-[100px]" name="description" placeholder="Detail description"></textarea>
                            </div>
                            <div className="form-control md:w-1/2 lg:ml-4">
                                <label className="label">
                                    <h1 className="text-xl font-serif">Available quantity</h1>
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

        </div >
    );
};

export default MyToys;