// import { useEffect, useState } from "react";

import { useState } from "react";


const AllToys = () => {
    // const [alltoys, setAllToys] = useState([])
    // const [toys, setToys] = useState([])

    // useEffect(() => {
    //     fetch('ppp.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const datas = data.slice(0, 20)
    //             setToys(datas)
    //             setAllToys(data)
    //         })
    // }, [])

    // const haha = () => {
    //     setToys(alltoys)
    // }
    // const [model, setModel] = useState([])

    // const haha = id =>{

    // }
    return (
        <>
            <div>
                {/* <h1>{toys.length}</h1> */}
                {/* {
                toys.map(rr => <p key={rr.id}>{rr.id}</p>)
            } */}
                {/* <button onClick={haha}>fkdjf</button> */}
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Toys Image</th>
                                <th>Toys Name and Price</th>
                                <th>Seller Name and Sub-category</th>
                                <th>Available Quantity</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask ">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnmld4IhNGHG1pz3geu_W3mX0BOTczG4EAw&usqp=CAU" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">Toys Name</div>
                                        <div className="text-sm opacity-50">Price</div>
                                    </div>
                                </td>
                                <td>
                                    sal name
                                    <br />
                                    <span className="badge badge-ghost badge-sm">catagory</span>
                                </td>
                                <td>Quantity</td>
                                <th>

                                    <button className="btn btn-outline btn-error">Error</button>
                                    {/* <label onClick={haha} htmlFor="my-modal-5" className="btn">open modal</label> */}
                                </th>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
            {/* <button onClick={haha}>fkdjf</button> */}
            <div className="w-40 mx-auto">
                <button className="btn">rahik</button>
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