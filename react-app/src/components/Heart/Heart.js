import React from "react";
import { useDispatch } from "react-redux";

import * as eventActions from '../../store/event'
import * as heartActions from '../../store/heart'

import "./Heart.css"

const Heart = ({event}) => {

    const dispatch = useDispatch()

    const heartyou = async (e) => {
        // e.preventDefault()
        await dispatch(heartActions.heart(Number(e)))
        dispatch(eventActions.all_events())
    }
    const hateyou = async (e) => {
        // e.preventDefault()
        await dispatch(heartActions.hate(Number(e)))
        dispatch(eventActions.all_events())
    }

    return (
       !event?.heart?.length ?
        <button
        id={event?.id}
        type='button'
        onClick={(e) => {heartyou(event?.id)}}
        className='heart-button'>{<img alt='' className="red-heart" />}
        </button>
        :
        <button
        id={event?.heart?.id}
        onClick={(e) => {hateyou(event?.heart[0]?.id)}}
        type='button'
        className='heart-button'>{<img alt='' className="black-heart" />}
        </button>
    )
}

export default Heart
