import React from 'react';
import { Link } from 'react-router-dom';

const HomePage6 = ({decreasePageNum}) => {
  return (
  <div className ="container">
      <div className="main-class dashboard-page">
       <div className = "row">
         <div className="col ">
         <strong><h1>Transparency!</h1></strong> 
            <p>Eventually, transparency could be achieved across the whole complex network with this private blockchain. For now...
            </p>
           
              <Link to="/login" ><button className="btn btn-lg btn-primary">View the Off-chain Demo</button></Link>
              <a href="https://github.com/ahetrick22/canchain-project"><button className="btn btn-sm btn-secondary">View the On-chain Source Code</button></a>
              <button className = "btn btn-sm btn-secondary" onClick={decreasePageNum}>Go back</button>

         </div>
       </div>
      </div>
   </div>   
  )
}

export default HomePage6;
    