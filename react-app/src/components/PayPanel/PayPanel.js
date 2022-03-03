import React from "react";

const PayPanel = ({ticketqty, tier, event, multiplier}) => {


    return (
    <>
        <div className='payslip'>
        <p className='order-summary'>Order summary</p>
        <p className='order-summary-calc'>{ticketqty} X {tier} tickets ${event?.cost}</p>
        <div className='subtotal-summary'>
            <p className='text'>Subtotal</p>
            <p className='text'>${multiplier* ticketqty * event?.cost} </p>
        </div>
        <div className='subtotal-summary fee-bottom'>
        <p className='text'>Fees  </p>
        <p className='text'>${multiplier * ticketqty * event?.cost * .15}  </p>
        </div>
        <div className='subtotal-summary'>
            <p>Total </p>
            <p>${(ticketqty * event?.cost + ticketqty * event?.cost * .15) * multiplier}  </p>
        </div>
        </div>
    </>
    )
}

export default PayPanel
