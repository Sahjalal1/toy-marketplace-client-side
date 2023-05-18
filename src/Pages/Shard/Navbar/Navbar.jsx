import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div className="navbar bg-[#9090ff]">
            <div className="navbar-start">
                <img className="w-40 h-20" src="https://i.ibb.co/t2H8GbJ/132151333-toy-store-modern-brush-lettering-text-vector-illustration-logo-for-print-and-advertising.webp" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='/mytoys'>My Toys</Link></li>
                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>

                {/* mobile navbar start*/}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='/mytoys'>My Toys</Link></li>
                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                {/* mobile navbar end*/}
            </div>
        </div>
    );
};

export default Navbar;