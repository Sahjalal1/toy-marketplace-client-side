import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/Home/AllToys/AllToys";
import MyToys from "../Pages/Home/MyToys/MyToys";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: "/addtoy",
                element: <MyToys></MyToys>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs> 
            },
            {
                path: "/login",
                element: <Login></Login> 
            },
            {
                path: "/signup",
                element: <SignUp></SignUp> 
            }
        ]
    }
]);

export default router;