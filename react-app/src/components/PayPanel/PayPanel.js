import React from "react";

const PayPanel = ({ticketqty, tier, event, multiplier}) => {


    return (
    <>
        <div className='payslip'>
        <p className='order-summary'>Order summary</p>
        <p className='order-summary-calc'>{ticketqty} X {tier} tickets ${event?.events[0]?.cost}</p>
        <div className='subtotal-summary'>
            <p className='text'>Subtotal</p>
            <p className='text'>${multiplier* ticketqty * event?.events[0]?.cost} </p>
        </div>
        <div className='subtotal-summary fee-bottom'>
        <p className='text'>Fees  </p>
        <p className='text'>${multiplier * ticketqty * event?.events[0]?.cost * .15}  </p>
        </div>
        <div className='subtotal-summary'>
            <p>Total </p>
            <p>${(ticketqty * event?.events[0]?.cost + ticketqty * event?.events[0]?.cost * .15) * multiplier}  </p>
        </div>
        </div>
    </>
    )
}

export default PayPanel
