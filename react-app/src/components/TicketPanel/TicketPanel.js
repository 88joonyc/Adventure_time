import React from "react";
import moment from "moment";

import ShoppingCart from "../PayPanel/ShoppingCart";
import PayPanel from "../PayPanel/PayPanel";

import './TicketPanel.css'

const optionValue = () => {
    let optionsArray = []
    for (let i = 1; i <= 10; i++) {
        optionsArray.push(i)
    }
    return optionsArray
}


const TicketPanel = ({event, ticket, ticketqty, setTicketQty, setTier, setMultiplier, unregisterforthisevent, registerforthisevent, cancelticketq, setPanel, panel, tier, multiplier }) => {

    return (
        <>
            <div className='ticket-panel-container'>
                <div className='ticketing-panel'>
                <div className='general-ticketing-panel'>
                    <div className='ticketing-panel-title'>{event?.name} <div className='title-datetimestamp'>{moment(event?.start_time).format('ddd, MMMM do, YYYY [at] h:mm A')}</div></div>
                    <div className='ticketing-panel-info'>
                    VIP Pass
                    <p className='ticket-small-print'>Please call to confirm a reservation for your ticket. RSVP does not guarantee a reservation for seating. Admission prices/times are subject to change based on demand, special events, and/or holiday weekends.</p>
                        {!ticket?.length && !ticketqty? (
                        <select className='selecter' onChange={(e) => (setTicketQty(e.target.value), setTier('VIP Pass'), setMultiplier(25)) }>
                        <option key='00' value=''> - select quantity - </option>
                        {optionValue().map((i) => (
                            <>
                                <option key={`${i}`} value={`${i}`}>{` - ${i} - `}</option>
                            </>
                        ))}
                    </select>)  : null}
                    </div>
                    <div className='ticketing-panel-info'>
                    Advanced Ticketing
                    <p className='ticket-small-print'>Advanced ticket purchase highly suggested.  Limited amount of tickets will be available the day of for a higher price due to capacity limitations at the venues.</p>
                        {!ticket?.length && !ticketqty ?  (
                        <select onChange={(e) => (setTicketQty(e.target.value), setTier('Advanced Ticketing'), setMultiplier(2))}>
                        <option key='00' value=''> - select quantity - </option>
                        {optionValue().map((i) => (
                            <>
                                <option key={`${i}`} value={`${i}`}>{` - ${i} - `}</option>
                            </>
                        ))}
                    </select>)  : null}
                    </div>
                    <div className='ticketing-panel-info'>
                    General Admission (Door)
                    <p className='ticket-small-print'>Event Admission; Express Check-In; Non-Refundable; Call For VIP Table Service</p>
                    {!ticket?.length && !ticketqty ? (
                    <select onChange={(e) => (setTicketQty(e.target.value), setTier("General Admission"), setMultiplier(1))}>
                        <option key='00' value=''> - select quantity - </option>
                        {optionValue().map((i) => (
                            <>
                                <option key={`${i}`} value={`${i}`}>{` - ${i} - `}</option>
                            </>
                        ))}
                    </select>)  : null}

                    </div>
                    <div className='register-button-contaienr'>
                <div className='registering-buttons'>
                    {ticket ? <button onClick={(e) => unregisterforthisevent(e)} className="unregister-button">unregister</button> : ( Number(ticketqty) !== 0 ? <button onClick={(e) => registerforthisevent(e)} className="register-button">register</button> : null )}
                    {ticketqty ? <button type='button' className='cancel-ticket-qty' onClick={(e) => cancelticketq()}>cancel</button> : null}
                </div>
                    </div>
                </div>
                <div>
                    <div className='ticket-image-container'>
                        <button onClick={() => setPanel(!panel) } className="ticket-cancel-button">X</button>
                        <img alt='tiximage_for_event' className='ticketing-image' src={event?.image}/>
                    </div>
                    <div className='ticketing-calculate-panel'>
                        <div className='cost-panel'>
                            {ticketqty ? < PayPanel ticketqty={ticketqty} tier={tier} event={event} multiplier={multiplier}/> : <ShoppingCart />}

                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default TicketPanel
