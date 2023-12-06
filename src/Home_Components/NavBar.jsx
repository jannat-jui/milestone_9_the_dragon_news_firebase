import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-[81%] mx-auto mt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/career'>Career</NavLink>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                                <NavLink to='/'>Home</NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/career'>Career</NavLink>
                                
                            </li>
                    </ul>
                </div>

                <div className="navbar-end flex mr-0 ">
                    <div className="avatar">
                        <div className="w-[36px] h-[36px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div>
                    <a className="btn ml-[8px] w-[140px] h-[44px] bg-black text-white rounded-none ">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;