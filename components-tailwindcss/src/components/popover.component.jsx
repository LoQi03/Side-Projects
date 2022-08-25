import React, { useState,useEffect } from "react";
import ContentFader from "./contentfader.component";

const Popover=(props)=>{
    const popoverId = props.popoverId;
    const [isVisible, setisVisible] = useState(props.isVisible);
    const popoverclass = isVisible ? "absolute bg-white  rounded-lg fade-in z-[101] shadow-md overflow-auto" : "hidden";
    const elementId = props.elementId;
    const preferredPosition = props.preferredPosition;
    const useAnchorElementWidth = props.useAnchorElementWidth;
    const isFlipEnable = props.isFlipEnable;
    
    useEffect(() => {
        let popover = document.getElementById(popoverId);
        if(isVisible)
        {
            findPositionForPopover(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable);
            document.addEventListener('scroll', popover.popoverScrollEvent = () => {
                findPositionForPopover(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable);
            }, false);
            window.addEventListener('resize', popover.popoverResizeEvent = () => {
                findPositionForPopover(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable);
            }, false);
        }
        else{
            document.removeEventListener('scroll', popover.popoverScrollEvent, false);
            window.removeEventListener('resize', popover.popoverResizeEvent, false);
        }
    });


    return(
        <div className={isVisible ? "" : "hidden"}>
        <div id={popoverId} className={popoverclass} style={{zIndex:props.zindex}}>
            {props.children}
        </div>
        <ContentFader isVisible={props.isVisible} zindex={(props.zindex)} onClickEvent={()=>{setisVisible(false)}}/>
        </div>
    );
}

function findPositionForPopover(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable) {
    let trigger = document.getElementById(elementId);
    let element = document.getElementById(popoverId);
    if (useAnchorElementWidth) {
        element.style.width = trigger.offsetWidth + "px";
    }
    element.style.margin = "0px 0px 0px 0px";
    let elementRect = element.getBoundingClientRect();
    let triggerRect = trigger.getBoundingClientRect();
    if (triggerRect != null) {
        if (isFlipEnable) {
            if (preferredPosition === 'TOP') {
                if (document.body.scrollTop > (triggerRect.top - element.offsetHeight)) {
                    calcBottomPosition(element, triggerRect, elementRect);
                }
                else {
                    calcTopPosition(element, triggerRect, elementRect);
                }
            }
            else {
                if (document.body.offsetHeight < (triggerRect.bottom + element.offsetHeight)) {
                    calcTopPosition(element, triggerRect, elementRect);
                }
                else {
                    calcBottomPosition(element, triggerRect, elementRect);
                }
            }
        }
        else {
            if (preferredPosition === 'TOP') {
                calcTopPosition(element, triggerRect, elementRect);
            }
            else {
                calcBottomPosition(element, triggerRect, elementRect);
            }
        }
    }
}

function calcTopPosition(element, triggerRect, elementRect) {
    element.style.left = ~~triggerRect.left + ~~((triggerRect.width / 2) - ~~(elementRect.width / 2)) + 'px';
    element.style.top = ~~(triggerRect.top - elementRect.height - 5 + window.scrollY) + 'px';
}

function calcBottomPosition(element, triggerRect, elementRect) {
    element.style.left = ~~triggerRect.left + ~~((triggerRect.width / 2) - ~~(elementRect.width / 2)) + 'px';
    element.style.top = ~~(triggerRect.bottom + 5 + window.scrollY) + 'px';
}


export default Popover