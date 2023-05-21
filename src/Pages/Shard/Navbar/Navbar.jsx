import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import './Navbar.css'
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const logout = () => {
        logOut()
    }
    return (
        <>
        <div className="navbar px-2 lg:px-10" style={{ backgroundImage: `url("https://i.ibb.co/fxtgGWZ/abstract-black-texture-background-hexagon-206725-413.jpg")` }}>
            <div className="navbar-start">
                <h2 className="text-xl lg:text-3xl font-bold text-white border-b-4">T<span className="text-[#52fff3]">o</span>ys S<span className="text-[#52fff3]">t</span>ore</h2>
              
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <ul className="menu menu-horizontal px-1 font-semibold text-xl text-[#52fff3]">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/alltoys'>All Toys</NavLink></li>
                        {
                            user && <li><NavLink to='/mytoys'>My Toys</NavLink></li>
                        }
                        {
                            user && <li><NavLink to='/addtoy'>Add A Toy</NavLink></li>
                        }
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </ul>
            </div>
            <div className="navbar-end">

                {/* <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div> */}
                {
                    user ?
                        <div className="flex items-center gap-5 mr-5 text-[#52fff3]">
                            <div  className="w-16 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                            <div>
                                <button onClick={logout} className="border-b-4 lg:text-xl">LogOut</button>
                                {/* <button className="btn btn-outline">Button</button> */}
                            </div>
                        </div>
                        : <NavLink className="lg:mr-12 border-b-4 text-xl text-[#52fff3]" to='/login'>Login</NavLink>
                }


                {/* mobile navbar start*/}
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost text-[#52fff3] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content bg-black text-[#52fff3] mt-3 p-2 shadow rounded-box w-52" >
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/alltoys'>All Toys</NavLink></li>
                        {
                            user && <li><NavLink to='/mytoys'>My Toys</NavLink></li>
                        }
                        {
                            user && <li><NavLink to='/addtoy'>Add A Toy</NavLink></li>
                        }
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                {/* mobile navbar end*/}
            </div>
        </div>
        <div className="pt-1  bg-[#52fff3]">

        </div>
        </>
    );
};

export default Navbar;