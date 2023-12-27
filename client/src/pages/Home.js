import React from "react";
import DefaultLayOut from "../components/DefaultLayOut";


// function DefaultLayOut(props){
//     return(
//         <div>
//             <div className="header">
//                 <div className="d-flex justify-content-between">
//                         <h1>Tikka Rentals</h1>
//                         <button>User</button>
//                 </div>
//             </div>
//             <div className="content">
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// export default DefaultLayOut;

function Login() {
    return (
      <DefaultLayOut>
        <h1>Home Page</h1>
        <h1>Stop playing with me</h1>
      </DefaultLayOut>
            
      
    )
}

export default Login