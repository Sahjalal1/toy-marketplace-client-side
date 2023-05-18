import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.1.1128138535.1684335108&semt=ais" alt="" />
            <button className="btn btn-error"><Link to='/'>GO To Home</Link></button>
        </div>
    );
};

export default ErrorPage;