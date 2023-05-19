

const Toysmap = ({toy}) => {
    const {toyname, price, sellername, category, quantity, } = toy
    return (
        <><div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Toys Name</th>
                        <th>Seller Name</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>                          
                            <div className="font-bold">{toyname}</div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">{sellername}</span>
                        </td>
                        <td>
                            {category}
                        </td>
                        <th>
                            {price}
                        </th>
                        <th>
                            {quantity}
                        </th>
                        <th>

                            <button className="btn btn-outline btn-error">Error</button>
                            {/* <label onClick={haha} htmlFor="my-modal-5" className="btn">open modal</label> */}
                        </th>
                    </tr>
                </tbody>


            </table>
        </div>
        </>
    );
};

export default Toysmap;