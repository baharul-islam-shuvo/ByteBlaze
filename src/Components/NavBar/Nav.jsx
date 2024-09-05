import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('synthwave');
        }
        else {
            setTheme('light');
        }
    }
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost gap-0 text-secondary normal-case text-2xl">Byte<span className="text-primary">Blaze</span></Link>
            </div>
            <div className="flex-none gap-4">
                <ul className="menu menu-horizontal px-1 gap-4 hidden sm:flex">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
                    <NavLink to='/bookmarks' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
                </ul>
                <input
                    onChange={handleTheme}
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" />
            </div>
        </div>
    );
};

export default Nav;