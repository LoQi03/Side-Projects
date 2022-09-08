import {React,useState} from "react";
import Popover from "./popover.component";
import { v4 as uuid } from 'uuid';
import ContentFader from "./contentfader.component";

const DropDown = (props) =>{
    const [isDropped, setisDropped] = useState(false);
    const [Value,setValue] = useState(null);
    
    return(
        <div className="w-full">
        <ContentFader isVisible={isDropped ? true : false} onClickEvent={()=>setisDropped(false)} zindex={99}></ContentFader>
        <button id={props.id} onClick={()=>setisDropped(true)} className="w-full bg-white text-black rounded-md p-2">{Value === null ? props.placeHolder : Value}</button>
        <Popover popoverId={uuid()} elementId={props.id} useAnchorElementWidth={true} isFlipEnable={true} preferredPosition="BOTTOM" zindex={100} isVisible={isDropped}>
        <ul className="text-center popup-in-anim">
                        {props.List.map((item, index) => {
                            return (
                                <li key={index}>
                                    <button className="p-2 bg-white hover:bg-slate-200 w-full" onClick={()=>{setValue(item.value); setisDropped(false)}}>{item.title}</button>
                                </li>
                            )
                        })}
        </ul>
        </Popover>
        </div>
    );
}

export default DropDown;