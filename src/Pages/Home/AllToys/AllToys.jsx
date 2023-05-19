import { useEffect, useState } from "react";
import Toysmap from "./Toysmap";





const AllToys = () => {


    const [alltoys, setAllToys] = useState([])
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const datas = data.slice(0, 20)
                setToys(datas)
                setAllToys(data)
            })
    }, [])

    const haha = () => {
        setToys(alltoys)
    }

console.log(toys)
    return (
        <>
        <div>
            {
                toys.map(toy => <Toysmap key={toy._id} toy={toy}></Toysmap>)
            }
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