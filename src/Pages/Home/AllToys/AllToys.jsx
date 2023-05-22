import { useEffect, useState } from "react";
// import { AuthContext } from "../../../Providers/AuthProviders";


const AllToys = () => {
    // const {loading} = useContext(AuthContext)

    const [alltoys, setAllToys] = useState([])
    const [toys, setToys] = useState([])
    const [details, setDetails] = useState([])

    useEffect(() => {

        fetch('https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                const something = data.slice(0, 20)
                setToys(something)
                setAllToys(data)
            })
    }, [])

    const alldata = () => {
        setToys(alltoys)
    }


    return (
        <>
            <div>
                <div className="overflow-x-auto w-[100%]">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Toys Name</th>
                                <th>Seller Name</th>
                                <th>category</th>
                                <th>Price</th>
                                <th>quantity</th>
                                <th>button</th>
                            </tr>
                        </thead>

                        {
                            toys.map(toy => <tbody key={toy._id}>

                                <tr>
                                    <td>
                                        <div className="font-bold">{toy.toyname}</div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{toy.sellername}</span>
                                    </td>
                                    <td>
                                        {toy.category}
                                    </td>
                                    <th>
                                        {toy.price}
                                    </th>
                                    <th>
                                        {toy.quantity}
                                    </th>
                                    <th>
                                        <label onClick={() => setDetails(toy)} htmlFor="my-modal" className="btn btn-outline btn-error">Toys Details</label>
                                    </th>
                                </tr>

                            </tbody>)
                        }

                    </table>
                </div>
            </div>


            {/* <button onClick={haha}>fkdjf</button> */}
            <div className="w-40 mx-auto">
                <button onClick={alldata} className="btn">All Toys</button>
            </div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                        <figure><img className="w-[500px] h-[300px] rounded-sm" src={details.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className="font-extrabold">Toy Name:</span> {details.toyname}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <h1><span className="font-extrabold">Seller Name:</span>{details.sellername}</h1>
                        <h1><span className="font-extrabold">Seller Email:</span> {details.selleremail}</h1>
                        <div className="flex justify-between">
                            <h2><span className="font-extrabold">Price:</span> {details.price}$</h2>
                            <h2><span className="font-extrabold">Rating:</span> {details.rating}</h2>
                        </div>
                        <h1><span className="font-extrabold">Quantity:</span> {details.quantity}</h1>
                        <p><span className="font-extrabold">description:</span> {details.description}</p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">colse!</label>                        
                    </div>
                </div>
            </div >
        </>

    );
};

export default AllToys;