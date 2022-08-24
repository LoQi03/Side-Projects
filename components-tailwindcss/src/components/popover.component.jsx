import React, { useState,useEffect } from "react";

const Popover=(props)=>{
    const { v4: uuidv4 } = require('uuid');
    const popoverId = uuidv4();
    const [isVisible, setisVisible] = useState(props.isVisible);
    const popoverclass = isVisible ? "absolute bg-white  rounded-lg fade-in z-[101] shadow-md overflow-auto" : "hidden";
    const elementId = props.elementId;
    const preferredPosition = props.preferredPosition;
    const useAnchorElementWidth = props.useAnchorElementWidth;
    const isFlipEnable = props.isFlipEnable;
    
    useEffect(() => {
        initPopoverListener(elementId,popoverId,preferredPosition,useAnchorElementWidth,isFlipEnable);
        return ()=>{
            disposePopoverListener(elementId,popoverId,preferredPosition,useAnchorElementWidth,isFlipEnable);
        }
    },[]);

    return(
        <div id={popoverId} className={popoverclass}>
            {props.children}
        </div>
    );
}

class PopoverElement {
    constructor(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable) {
        this.elementId = elementId;
        this.popoverId = popoverId;
        this.preferredPosition = preferredPosition;
        this.useAnchorElementWidth = useAnchorElementWidth;
        this.isFlipEnable = isFlipEnable;
    }
    static PopoverList = [];
    static addList(popover) {
        this.PopoverList.push(popover);
        document.addEventListener('scroll', popover.popoverScrollEvent = () => {
            findPositionForPopover(popover.elementId, popover.popoverId, popover.preferredPosition, popover.useAnchorElementWidth, popover.isFlipEnable);
        }, false);
        window.addEventListener('resize', popover.popoverResizeEvent = () => {
            findPositionForPopover(popover.elementId, popover.popoverId, popover.preferredPosition, popover.useAnchorElementWidth, popover.isFlipEnable);
        }, false);
    }
    static removeList(popover) {
        document.removeEventListener('scroll', popover.popoverScrollEvent, false);
        window.removeEventListener('resize', popover.popoverResizeEvent, false);
        this.PopoverList.splice(this.PopoverList.indexOf(popover), 1)
    }
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

export function initPopoverListener(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable) {
    let popover = new PopoverElement(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable);
    PopoverElement.addList(popover, elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable)
}

export function disposePopoverListener(popoverId) {
    for (let i = 0; i < PopoverElement.PopoverList.length; i++) {
        if (popoverId === PopoverElement.PopoverList[i].popoverId) {
            PopoverElement.removeList(PopoverElement.PopoverList[i]);
        }
    }
}

export function updatePopover(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable) {
    findPositionForPopover(elementId, popoverId, preferredPosition, useAnchorElementWidth, isFlipEnable);
}

export default Popover