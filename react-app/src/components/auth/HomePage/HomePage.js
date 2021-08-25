import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import SplashPage from './SplashPage'

const HomePage = () => {
const sessionUser = useSelector(state => state.session)
let content = null

if (sessionUser.user) {
    content = (<>
        <h1>yeah im logged in</h1>
        <h1>yeah im logged in</h1>
    </>)
} else {
    content = (
        <>
            <SplashPage/>
        </>
    )
}

    return content
}

export default HomePage
