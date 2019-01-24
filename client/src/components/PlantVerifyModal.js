import React from 'react';

const PlantVerifyModal = props => {
  const {
    dbDiscrepancy
  } = props;

  return (
    <>
      {dbDiscrepancy === 0 ? <><div className="green-circle"></div><span>  No discrepancy in database.</span><br/></> : 
       <><div className="red-circle"></div><span>  Discrepancy identified in database.</span><br /></>}
       <><div className="green-circle"></div><span>  This shows if the chain discrepancy matches the database discrepancy.</span><br/></> 
            
            <label>Center Address: </label>
            0x0000...comes from Metamask
            <br/>
            <label>Plant Address: </label>
            0x0000...comes from Metamask
            <br/>
            <label>Center Count: </label>
            Would be count from blockchain
            <br/>
            <label>Plant Count: </label>
            Would be count from blockchain
            <br/>
            <label>Center Date/Time: </label>
            Shows the date/time of center's transaction.
            <br/>
            <label>Plant Date/Time: </label>
            Shows the date/time of plant's transaction.
            <br/>
            <label>Center Block Number: </label>
            Would be block number which mined the center's verification
            <br/>
            <label>Plant Block Number: </label>
            Would be block number which mined the plant's verification
            <br/>
            <label>Database Discrepancy: </label>
            {dbDiscrepancy}
            <br/>
            <label>Chain Discrepancy: </label>
            Would show the discrepancy on chain
            <br/>
      </>
    );
}

export default PlantVerifyModal;