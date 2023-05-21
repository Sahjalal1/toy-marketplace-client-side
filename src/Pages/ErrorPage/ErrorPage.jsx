import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-[90%] mx-auto">
            <img className="mx-auto" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.1.1128138535.1684335108&semt=ais" alt="" />
            <div className="w-[50%] mx-auto text-center">
                <button className="btn btn-error"><Link to='/'><span>GO To Home</span></Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;