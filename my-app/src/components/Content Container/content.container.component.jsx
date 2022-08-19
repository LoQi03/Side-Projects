import React from "react";

function ContentContainer(props)
{
    return(
        <div className="contant-overlay">
            {props.children}
        </div>
    );
}

export default ContentContainer