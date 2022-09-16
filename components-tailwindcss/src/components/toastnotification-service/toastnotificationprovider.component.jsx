import React,{useState,useEffect} from "react";
import ToastNotification from "./toastnotification.component";

const ToastNotificationProvider = ()=>{
    const [notificationList,setNotificationList] = useState([]);

    return(
        <div className="absolute top-1 left-1" style={{zIndex:1000}}>
            <ToastNotification type="error" message="Valami szöasdkjfélkjsd kléfjsdal kjaslkéd jfaskléjdfjklés" setisVisible={(isVisible) => console.log(isVisible)}></ToastNotification>
            <ToastNotification type="success" message="Valami szöasdkjfélkjsd kléfjsdal kjaslkéd jfaskléjdfjklés" setisVisible={(isVisible) => console.log(isVisible)}></ToastNotification>
            <ToastNotification type="warning" message="Valami szöasdkjfélkjsd kléfjsdal kjaslkéd jfaskléjdfjklés" setisVisible={(isVisible) => console.log(isVisible)}></ToastNotification>
        </div>
    );


}

function sendNotification(){}

export default ToastNotificationProvider;