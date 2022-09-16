import React from "react";
import { Link } from "react-router-dom";
import beer from "../assets/beer.png";
const Navbar = ()=>
{
    return(
            <ul className="flex flex-row w-full justify-start space-x-10 bg-amber-400 items-center h-20 px-4">
                <Link to="/"><img className="h-[4rem] w-[4rem]" src={beer} alt=""/></Link>
                <li className="">
                    <Link className="hover:text-white text-lg font-bold" to="/">Project Terv</Link>
                </li>
                <li className="">
                    <Link className="hover:text-white text-lg font-bold" to="/f2">Feladat 2</Link>
                </li>
                <li className="">
                    <Link className="hover:text-white text-lg font-bold" to="/f3">Feladat 3</Link>
                </li>
                <li className="">
                    <Link className="hover:text-white text-lg font-bold" to="/f4">Feladat 4</Link>
                </li>
                <li className="">
                    <Link className="hover:text-white text-lg font-bold" to="/f5">Feladat 5</Link>
                </li>
            </ul>
    );
}
export default Navbar;