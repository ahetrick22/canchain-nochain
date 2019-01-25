import React from 'react';

const CenterVerifyModal = props => {
  return (
    <>
            <label>Center Address: </label>
            0x0000...comes from Metamask
            <br/>
            <label>Plant Address: </label>
            0x0000...comes from Metamask
            <br/>
            <label>Center Count: </label>
            Verify delivery to view
            <br/>
            <label>Plant Count: </label>
            N/A
            <br/>
            <label>Center Date/Time: </label>
            The mined date/time of center's transaction
            <br/>
            <label>Plant Date/Time: </label>
            N/A
            <br/>
            <label>Center Block Number: </label>
            Block number which mined the center's delivery
            <br/>
            <label>Plant Block Number: </label>
            N/A
            <br/>
            <label>Database Discrepancy: </label>
            N/A
            <br/>
            <label>Chain Discrepancy: </label>
            N/A
            <br/>
            <p>Discrepancy cannot be calculated before plant verification of delivery.</p>
       
      </>
  )
}

export default CenterVerifyModal;