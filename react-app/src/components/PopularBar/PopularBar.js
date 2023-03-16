import React from "react";
import { useDispatch } from "react-redux";

import * as eventActions from '../../store/event'

const PopularBar = ({setSearch, sessionUser}) => {

const dispatch = useDispatch()

const set_located_events = (id) => {
    dispatch(eventActions.located_events(id))
    window.scrollTo({left: 0, top: 580, behavior:'smooth'})
}

const set_categorized_events = (id) => {
    dispatch(eventActions.categorized_events(id))
    window.scrollTo({left: 0, top: 580, behavior:'smooth'})
}

const set_paid_events = (id) => {
    dispatch(eventActions.cashed_events(id))
    window.scrollTo({left: 0, top: 580, behavior:'smooth'})
}

//unregistered.... this is very inefficient
const set_unregistered_located_events = (id) => {
    dispatch(eventActions.unregisted_located_events(id))
    window.scrollTo({left: 0, top: 580, behavior:'smooth'})
}

const set_unregisterd_categorized_events = (id) => {
    dispatch(eventActions.unregisted_categorized_events(id))
    window.scrollTo({left: 0, top: 580, behavior:'smooth'})
}

const set_unregisterd_paid_events = (id) => {
    dispatch(eventActions.unregisted_cashed_events(id))
    window.scrollTo({left: 0, top: 580, behavior:'smooth'})
}


    return (
    <>
        <div class='popularity-selector'>
            <h1 className='card-popular-in-title'>Search by  {'>'}
            {<input
                    placeholder='event name'
                    onChange={(e)=> setSearch((e.target.value).toLowerCase())}
                    className='venue-search-box'
                />
            }
            </h1>
            <div className='home-card-categories'>
                <div className='cat-button-container'>
                    {sessionUser ? <button onClick={() => dispatch(eventActions.all_events())} className='cat-all cat-button'>All</button> : <button onClick={() => dispatch(eventActions.unregistered_events())} className='cat-button'>All</button>}
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_located_events(2)} className='cat-button'>For you</button> : <button onClick={() => set_unregistered_located_events(2)} className='cat-button'>For you</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_located_events(5)} className='cat-button'>Online</button> : <button onClick={() => set_unregistered_located_events(5)} className='cat-button'>Online</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(2)} className='cat-button'>Business & Professional</button> : <button onClick={() => set_unregisterd_categorized_events(2)} className='cat-button'>Business & Professional</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_paid_events(0)} className='cat-button'>Free</button> : <button onClick={() => set_unregisterd_paid_events(0)} className='cat-button'>Free</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(19)} className='cat-button'>Holiday</button> : <button onClick={() => set_unregisterd_categorized_events(19)} className='cat-button'>Holiday</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(4)} className='cat-button'>Communication & Culture</button> : <button onClick={() => set_unregisterd_categorized_events(4)} className='cat-button'>Communication & Culture</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(13)} className='cat-button'>Music</button> : <button onClick={() => set_unregisterd_categorized_events(13)} className='cat-button'>Music</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(8)} className='cat-food cat-button'>Food & Drinks</button> : <button onClick={() => set_unregisterd_categorized_events(8)} className='cat-button'>Food & Drinks</button> }
                </div>
            </div>
        </div>

    </>
    )
}

export default PopularBar
