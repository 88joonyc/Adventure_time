import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const TicketPanel = ({event, ticket, ticketqty, setTicketQty, setTier, setMultiplier, unregisterforthisevent, registerforthisevent, cancelticketq, setPanel, panel, paypanel}) => {

    return (
        <>
            <div className='ticket-panel-container'>
                <div className='ticketing-panel'>
                <div className='general-ticketing-panel'>
                    <div className='ticketing-panel-title'>{event?.events[0]?.name} <div className='title-datetimestamp'>{moment(event?.events[0]?.start_time).format('ddd, MMMM do, YYYY [at] h:mm A')}</div></div>
                    <div className='ticketing-panel-info'>
                    VIP Pass
                    <p className='ticket-small-print'>Please call to confirm a reservation for your ticket. RSVP does not guarantee a reservation for seating. Admission prices/times are subject to change based on demand, special events, and/or holiday weekends.</p>
                        {!ticket?.length && !ticketqty? (
                        <select className='selecter' onChange={(e) => (setTicketQty(e.target.value), setTier('VIP Pass'), setMultiplier(25)) }>
                        <option key='00' value=''> - select quantity - </option>
                        <option key='1' value='1'> - 1 - </option>
                        <option key='2' value='2'> - 2 - </option>
                        <option key='3' value='3'> - 3 - </option>
                        <option key='4' value='4'> - 4 - </option>
                        <option key='5' value='5'> - 5 - </option>     {/* this is not DRY!!!! CLEAN IT UP... later */}
                        <option key='6' value='6'> - 6 - </option>
                        <option key='7' value='7'> - 7 - </option>
                        <option key='8' value='8'> - 8 - </option>
                        <option key='9' value='9'> - 9 - </option>
                        <option key='0' value='10'> - 10 - </option>
                        {/* {(n = 1) => {
                        while (n <= 10) {
                            <option value={n}> - {n} - </option>
                            n += 1
                        }
                        }} */}
                    </select>)  : null}
                    </div>
                    <div className='ticketing-panel-info'>
                    Advanced Ticketing
                    <p className='ticket-small-print'>Advanced ticket purchase highly suggested.  Limited amount of tickets will be available the day of for a higher price due to capacity limitations at the venues.</p>
                        {!ticket?.length && !ticketqty ?  (
                        <select onChange={(e) => (setTicketQty(e.target.value), setTier('Advanced Ticketing'), setMultiplier(2))}>
                        <option key='00' value=''> - select quantity - </option>
                        <option key='1' value='1'> - 1 - </option>
                        <option key='2' value='2'> - 2 - </option>
                        <option key='3' value='3'> - 3 - </option>
                        <option key='4' value='4'> - 4 - </option>
                        <option key='5' value='5'> - 5 - </option>
                        <option key='6' value='6'> - 6 - </option>
                        <option key='7' value='7'> - 7 - </option>
                        <option key='8' value='8'> - 8 - </option>
                        <option key='9' value='9'> - 9 - </option>
                        <option key='0' value='10'> - 10 - </option>
                        {/* {(n = 1) => {
                        while (n <= 10) {
                            <option value={n}> - {n} - </option>
                            n += 1
                        }
                        }} */}
                    </select>)  : null}
                    </div>
                    <div className='ticketing-panel-info'>
                    General Admission (Door)
                    <p className='ticket-small-print'>Event Admission; Express Check-In; Non-Refundable; Call For VIP Table Service</p>
                    {!ticket?.length && !ticketqty ? (
                    <select onChange={(e) => (setTicketQty(e.target.value), setTier("General Admission"), setMultiplier(1))}>
                        <option key='00' value=''> - select quantity - </option>
                        <option key='1' value='1'> - 1 - </option>
                        <option key='2' value='2'> - 2 - </option>
                        <option key='3' value='3'> - 3 - </option>
                        <option key='4' value='4'> - 4 - </option>
                        <option key='5' value='5'> - 5 - </option>
                        <option key='6' value='6'> - 6 - </option>
                        <option key='7' value='7'> - 7 - </option>
                        <option key='8' value='8'> - 8 - </option>
                        <option key='9' value='9'> - 9 - </option>
                        <option key='0' value='10'> - 10 - </option>
                        {/* {(n = 1) => {
                        while (n <= 10) {
                            <option value={n}> - {n} - </option>
                            n += 1
                        }
                        }} */}
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
                        <img alt='tiximage_for_event' className='ticketing-image' src={event?.events[0]?.image}/>
                    </div>
                    <div className='ticketing-calculate-panel'>
                        <div className='cost-panel'>
                            {paypanel}

                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default TicketPanel
