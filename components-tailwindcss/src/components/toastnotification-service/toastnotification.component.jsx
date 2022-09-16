import {React,useState,useEffect} from "react";
import './toastnotification.css';

const ToastNotification =(props)=>{
    const [isVisible,setisVisible]=useState(true);
    const useColorBackGround = selectColorBackGround(props.type);
    const [progress,setProgress] = useState(100);
    const [opacity,setOpacity] = useState(1);

    useEffect(() => {
        if(props.type === "accept" || props.type === "warning"){
        let interval = null;
        if (isVisible) {
          interval = setInterval(() => {
            setProgress(progress => progress - 0.5);
          }, 60);
          if(progress <= 10)
          {
            setOpacity(opacity - 0.05);
          }
          if(progress === 0)
          {
            setisVisible(false);
          }
        } 
        return () => {clearInterval(interval);};}
        else{
            setProgress(0);
        }
      }, [isVisible, progress,props.type]);

    return(
        
        <div className="fade-in-anim ">
            {isVisible ?
        <div className={useColorBackGround} style={{opacity :`${opacity}`} }>
            <div className="h-full flex flex-row justify-between">
                <div className="m-3 flex-none"><ToastNotificationImg type={props.type}></ToastNotificationImg></div>
                <div className="ml-2 my-5 flex-auto text-white text-semibold">
                        {props.alert}
                </div>
                <button onClick={()=>setisVisible(false)} className="flex-1/4 text-2xl m-4 text-slate-500 hover:text-white">&times;</button>
            </div>
            <div className="bg-white opacity-50 h-2.5 rounded-b-lg" style={{transition: "width 60ms",width : `${progress}%`}}/>
        </div>
         : null}
        </div>
    );
}

function selectColorBackGround(type)
{
    if(type === "error")
    {
        return "flex flex-col bg-red-500 min-w-[50rem] max-w-[60rem] h-min-[12rem] rounded-lg";
    }
    else if(type === "accept")
    {
        return "flex flex-col bg-green-500 min-w-[50rem] max-w-[60rem] h-min-[12rem] rounded-lg";
    }
    else
    {
       return "flex flex-col bg-amber-400 min-w-[50rem] max-w-[60rem] h-min-[12rem] rounded-lg";
    }
}

const ToastNotificationImg = (props)=>{
    if(props.type === "error")
    {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>);
    }
    else if(props.type === "accept")
    {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          );
    }
    else
    {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          );
    }
}

export default ToastNotification;