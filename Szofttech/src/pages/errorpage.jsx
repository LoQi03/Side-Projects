import React from "react";
import robot from "../assets/robot.png";


function ErrorPage()
{
    return(
        <div className="flex flex-col justify-center items-center space-y-20  mt-4">
        <div className="text-[4rem]"><p>Sorry, this page is not found!</p></div>
        <div><img className="w-[30rem] h-[30rem]" src={robot} alt=""></img></div>
        </div>
    );
}
export default ErrorPage;