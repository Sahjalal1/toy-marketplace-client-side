import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const [mytoys, setMytoys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setMytoys(data);
            });
    }, [user]);


    return (
        <div>
            <p>
                {mytoys.length}
            </p>
            <h1>mytoys</h1>
        </div>
    );
};

export default MyToys;