import React from "react";
import robot from "../assets/robot.png";
function ErrorPage()
{
    return(
        <div className="flex flex-col justify-center items-center space-y-20">
        <div className="text-bold text-[5rem]">Sorry, this page is not found!</div>
        <div><img className="w-[40rem] h-[40rem]" src={robot} alt=""></img></div>
        </div>
    );
}
export default ErrorPage;