import React, { useState } from "react";
import './components.css';

const Modal = (props) => {
    const [isVisible, setisVisible] = useState(props.isVisible);
    const modalclass = isVisible ? "popup-in-anim centered" : "hidden";
    return (
        <div className={modalclass} style={{ zIndex: props.zIndex }}>
            <div className={"lg:rounded-lg md:rounded-lg sm:rounded-none shadow-md bg-white lg:h-auto md:h-auto sm:h-screen lg:w-auto md:w-auto sm:w-screen flex flex-col"}>
                <div className="flex flex-row sm:justify-center lg:justify-between md:justify-between text-bold font-bold text-2xl p-2 rounded-t-md flex-none">{props.title}
                    <button className="text-sm font-normal pb-3 pr-2 lg:block md:block sm:hidden" onClick={() => setisVisible(false)}>X</button>
                    <button className="absolute text-md font-normal left-1 top-3 text-sky-600 lg:hidden md:hidden sm:block text-lg align-text-bottom"  onClick={() => setisVisible(false)}>
                        <div className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Close
                        </div>
                    </button>
                </div>
                <div className="p-4 flex-auto border-t-2 mx-2 border-gray-300">{props.children}</div>
                <div className="text p-4 sm:text-center lg:text-right md:text-right lg:text-lg md:text-lg sm:text-2xl"><button className="lg:py-2 md:py-2 sm:py-5 lg:px-4 md:px-4 sm:px-10 bg-green-500 text-white rounded-lg hover:bg-green-600 flex-none text-bold" onClick={props.onClickevent}>{props.buttonText}</button></div>
            </div>
        </div>
    );

}
export default Modal;