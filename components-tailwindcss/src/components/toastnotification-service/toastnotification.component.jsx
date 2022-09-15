import {React,useState,useEffect} from "react";
import { ToastNotificationImageConfig } from "../../config/ImageConfig";
import './toastnotification.css';

const ToastNotificationImg = (props)=>{
    if(props.type === "error")
    {
        return(
        <img className="h-12 w-12" src={ToastNotificationImageConfig.error}  alt=""/>);
    }
    else if(props.type === "accept")
    {
        return(
        <img className="h-12 w-12" src={ToastNotificationImageConfig.accept}  alt=""/>);
    }
    else
    {
        return(
        <img className="h-12 w-12" src={ToastNotificationImageConfig.default}  alt=""/>);
    }
}


const ToastNotification =(props)=>{
    const [isVisible,setisVisible]=useState(true);
    const useColor = SelectColor(props.type);
    const [progress,setProgress] = useState(100);


    useEffect(() => {
        if(props.type === "accept" || props.type === "warning" || props.AlertList.count >= 5){
        let interval = null;
        if (isVisible) {
          interval = setInterval(() => {
            setProgress(progress => progress - 1);
          }, 50);
          if(progress === 0)
          {
            setisVisible(false);
          }
        } 
        return () => {clearInterval(interval);};}
      }, [isVisible, progress]);

    return(
        
        <div className="fade-in-anim ">
            {isVisible ?
        <div className="flex flex-col bg-white w-[28rem] h-min-[12rem] rounded-lg">
            <div className="w-full bg-gray-200 rounded-t-lg h-2.5 dark:bg-gray-500">
                <div className="bg-sky-500 h-2.5 rounded-t-lg" style={{width: `${progress}%`}}/>
            </div>
            <div className="h-full flex flex-col justify-between items-center">
                <div className="m-3"><ToastNotificationImg type={props.type}></ToastNotificationImg></div>
                <ul className="text-[13px]">
                        {props.AlertList.map((alert, index) => {
                            return (
                                <li className={useColor} key={index}>
                                {alert.text}({alert.code})
                                </li>
                            )
                        })}
                </ul>
                <button onClick={()=>setisVisible(false)} className="bg-sky-500 px-10 m-4 text-white rounded-lg hover:bg-sky-600 text-semibold">OK</button>
            </div>
        </div>
         : null}
        </div>
    );
}

function SelectColor(type)
{
    if(type === "error")
    {
        return "text-red-500";
    }
    else if(type === "accept")
    {
        return "text-green-500";
    }
    else
    {
       return "text-yellow-500";
    }
}

export default ToastNotification;