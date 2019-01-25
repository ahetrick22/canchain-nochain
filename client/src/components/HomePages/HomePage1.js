import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLock, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const HomePage1 = ({increasePageNum}) => {
  return (
  <div className ="container">
      <div className="main-class dashboard-page">
       <div className = "row">
         <div className="col">
         <strong><h1>Welcome to <span className="logo">CanChain</span></h1></strong>
            <p>CanChain uses the <a href="https://truffleframework.com/">Truffle Suite</a> and <a href="https://metamask.io/">Metamask</a> to interact with a private blockchain. 
              It uses a recycling network as an example to demonstrate the capabilities.
            </p>
            </div>
            </div>
       

              <button className = "btn btn-lg btn-primary"  onClick={increasePageNum}>Tell me More</button>
              <a href="https://github.com/ahetrick22/canchain-project"><button className="btn btn-sm btn-secondary">View the On-chain Source Code</button></a>
              <Link to="/login" ><button className="btn btn-sm btn-secondary ">View the Off-chain Demo</button></Link>
       </div>
       </div>

  )
}

export default HomePage1;
    
// <div className="row">
// <div className="col-sm">
//   <p className="handshake handshake-text"><strong>Transparency</strong></p>
// </div>
// <div className="col-1 ">
// <FontAwesomeIcon icon={faArrowCircleRight} className='upsize arrow'/>
// </div>
// <div className="col-sm ">
// <p className="lock lock-text"><strong>Security</strong></p>
// </div>
// </div>
// <div className="row">
//   <div className="col-sm">
//   <FontAwesomeIcon icon={faHandshake} className='upsize handshake handshake-icon'/>
//   </div>
//   <div className="col-sm">
//   <FontAwesomeIcon icon={faLock} className='upsize lock lock-icon' />
//   </div>
// </div>