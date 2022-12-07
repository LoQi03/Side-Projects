import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = ()=>
{
    return(
            <ul className="flex flex-row w-[1080px] justify-between bg-amber-400 items-center h-20 px-9 rounded-b-full border-solid border-black border-[6px] mt-2">
                <li className="">
                    <Link className="pixel hover:text-white text-lg text-[24px]" to="/"><p className="font-semibold">Projektterv</p></Link>
                </li>
                <li className="">
                    <Link className="pixel hover:text-white text-lg text-[24px]" to="/f2"><p className="font-semibold">Feladat 2</p></Link>
                </li>
                <li className="">
                    <Link className="pixel hover:text-white text-lg text-[24px]" to="/f3"><p className="font-semibold">Feladat 3</p></Link>
                </li>
                <li className="">
                    <Link className="pixel hover:text-white text-lg text-[24px]" to="/f4"><p className="font-semibold">Feladat 4</p></Link>
                </li>
                <li className="">
                    <Link className="pixel hover:text-white text-lg text-[24px]" to="/f5"><p className="font-semibold">Feladat 5</p></Link>
                </li>
            </ul>
    );
}
export default Navbar;