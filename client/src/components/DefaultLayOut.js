import React from "react";

function DefaultLayOut(props){
    return(
        <div>
            <div className="header bx1">
                <div className="d-flex justify-content-between">
                        <h1>Tikka Rentals</h1>
                    
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayOut;