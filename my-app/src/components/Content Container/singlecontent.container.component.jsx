import React from "react";
import './ContentContainer.css';

function SingleContentContainer(props)
{
    return(
        <div className="single-content-overlay">
            {props.childcontent}
        </div>
    );
}

export default SingleContentContainer