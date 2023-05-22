// import React from 'react';

const Model = ({details}) => {
    return (
        <>
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

export default Model;