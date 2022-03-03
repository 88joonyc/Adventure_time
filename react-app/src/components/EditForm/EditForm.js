import React from "react";
import moment from "moment";


const EditForm = ({editthisevent, venue_id, setVenue, venue, category_id, setCategory, category, name, setName, description, setDescript, startTime, setStart, end_time, setEnd, capacity, setCap, image, setImg, cost, setCost, editForm, toggleEdit}) => {


    return (
        <>
            <div className='edit-panel-container'>
                <div className="edit-container">
                    <form className='edit-form' onSubmit={(e) =>{editthisevent(e)}}>
                        <div>
                            <label className='edit-labels'> Venue selection
                                <select
                                    type="number"
                                    value={venue_id}
                                    onChange={(e) => setVenue(e.target.value)}
                                    required={true}
                                    className='edit-input longer'
                                >
                                    <option value='' key='00'>select</option>
                                    {venue?.map(ven => (
                                        <option key={ven.id} value={ven.id}>{ven.name}, address: {ven.address} {ven.city}, {ven.state}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Category
                                <select
                                        type="number"
                                        value={category_id}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required={true}
                                        className='edit-input longer'
                                    >
                                        <option value='' key='00'>select</option>
                                        {category?.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.type}</option>
                                        ))}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Name of event
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                    className='edit-input'
                                    maxLength={255}
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Description to event
                                <textarea
                                    // type="text"
                                    value={description}
                                    onChange={(e) => (setDescript(e.target.value))}
                                    required={true}
                                    className='edit-textarea'
                                    maxLength={5000}
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Start of event
                                <input
                                    type="datetime-local"
                                    value={moment(startTime).format('YYYY-MM-DDTHH:mm')}
                                    onChange={(e) => (setStart(moment(e.target.value).format('MMM D YYYY HH:mm:ss')))}
                                    required={true}
                                    className='edit-input'
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> End of event
                                <input
                                    type='datetime-local'
                                    value={moment(end_time).format('YYYY-MM-DDTHH:mm')}
                                    onChange={(e) => (setEnd(moment(e.target.value).format('MMM D YYYY HH:mm:ss')))}
                                    required={true}
                                    className='edit-input'
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Capacity limit
                                <input
                                    type='number'
                                    value={capacity}
                                    onChange={(e) => setCap(e.target.value)}
                                    required={true}
                                    className='edit-input'
                                    max={2000000000}
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Main event image
                                <input
                                    type='text'
                                    value={image}
                                    onChange={(e) => setImg(e.target.value)}
                                    className='edit-input'
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> ticket costs
                                <input
                                    type='number'
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)}
                                    required={true}
                                    className='edit-input'
                                    max={2000000000}
                                />
                            </label>
                        </div>
                        <button className='edit-form-buttons' type='submit'>Update</button>
                        <button className='edit-form-buttons' onClick={() => {toggleEdit(!editForm)}} type='button'>Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditForm
