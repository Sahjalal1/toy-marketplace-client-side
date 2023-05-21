import {  useEffect, useState } from "react";
// import { AuthContext } from "../../../Providers/AuthProviders";


const AllToys = () => {
// const {loading} = useContext(AuthContext)

    const [alltoys, setAllToys] = useState([])
    const [toys, setToys] = useState([])

    useEffect(() => {
        
        fetch('https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                const something = data.slice(0, 20)
                setToys(something)
                setAllToys(data)
            })
    }, [])

    const haha = () => {
        setToys(alltoys)
    }


    const model = id =>{
        const fl = alltoys.filter(alltoys._id === id)
        console.log(fl)
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
                                        <label onClick={()=> model (toy._id)} htmlFor="my-modal-5" className="btn btn-outline btn-error">Toys Details</label>
                                    </th>
                                </tr>

                            </tbody>)
                        }

                    </table>
                </div>
            </div>


            {/* <button onClick={haha}>fkdjf</button> */}
            <div className="w-40 mx-auto">
                <button onClick={haha} className="btn">All Toys</button>
            </div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4"> been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AllToys;