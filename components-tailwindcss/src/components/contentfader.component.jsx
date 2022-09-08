import React from "react";

const ContentFader =(props)=>
{
    return(
        <div className={props.isVisible ? "absolute top-0 flex justify-center items-center h-screen w-screen" : "hidden"} style={{zIndex:props.zindex}} onClick={props.onClickEvent}/>
    );
} 
export default ContentFader;