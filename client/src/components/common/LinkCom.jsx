/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function LinkCom(props) {
    return (
        <>
            <Link to={props.to} className='font-Poppins font-medium w-full bg-primary text-white px-4 py-3 transition-all duration-500 ease-in-out text-center rounded-full text-xs inline-block hover:bg-primary hover:text-white loader animate-bounce '> {props.name}</Link>
        </>
    )
}

export default LinkCom