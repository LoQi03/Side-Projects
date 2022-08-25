import React,{useState} from "react";

const ContentFader =(props)=>
{
    const isVisible = useState(props.isVisible);
    const faderclass = isVisible ? "popup-in-anim absolute flex justify-center items-center h-screen w-screen" : "hidden";
    return(
        <div className={faderclass} style={{zIndex:props.zindex}} onClick={props.onClickEvent}/>
    );
}
export default ContentFader;