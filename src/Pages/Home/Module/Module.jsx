

const Module = (props) => {
    console.log(props.daiaa)
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <form >
                        <input defaultValue={props?.daiaa?.price} type="text" placeholder="price" name="price" className="input input-bordered input-primary w-full max-w-xs" />
                        <p className="text-black">{props?.daiaa?.price}</p>
                        <div className="modal-action">
                            {/* <label  className="btn">Yay!</label> */}
                            <input onSubmit={props.daiaa} htmlFor="my-modal-5" type="submit" value="updete" />
                        </div>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default Module;