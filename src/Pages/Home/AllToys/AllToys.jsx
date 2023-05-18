import { useEffect, useState } from "react";


const AllToys = () => {
    const [alltoys, setAllToys] = useState([])
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('ppp.json')
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
    return (
        <div>
            <h1>{toys.length}</h1>
            {
                toys.map(rr => <p key={rr.id}>{rr.id}</p>)
            }
            <button onClick={haha}>fkdjf</button>
        </div>
    );
};

export default AllToys;