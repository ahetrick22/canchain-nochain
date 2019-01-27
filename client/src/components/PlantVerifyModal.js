import React from 'react';

//chain record that shows up after a plant has verified a delivery
const PlantVerifyModal = props => {
  const {
    dbDiscrepancy
  } = props;

  return (
    <>
      {dbDiscrepancy === 0 ? <><div className="green-circle"></div><span>  No discrepancy in database.</span><br/></> : 
       <><div className="red-circle"></div><span>  Discrepancy identified in database.</span><br /></>}
       <><div className="green-circle"></div><span>  When on chain: shows if the database #s have been tampered with.</span><br/></> 
            
            <label>Center Address: </label>
            0x0000... contract address from Metamask
            <br/>
            <label>Plant Address: </label>
            0x0000... contract address from Metamask
            <br/>
            <label>Center Count: </label>
            Count from blockchain
            <br/>
            <label>Plant Count: </label>
            Count from blockchain
            <br/>
            <label>Center Date/Time: </label>
            The mined date/time of center's transaction
            <br/>
            <label>Plant Date/Time: </label>
            The mined date/time of plant's transaction
            <br/>
            <label>Center Block Number: </label>
            Block number which mined the center's delivery
            <br/>
            <label>Plant Block Number: </label>
            Block number which mined the plant's verification
            <br/>
            <label>Database Discrepancy: </label>
            {dbDiscrepancy}
            <br/>
            <label>Chain Discrepancy: </label>
            The on-chain discrepancy
            <br/>
      </>
    );
}

export default PlantVerifyModal;