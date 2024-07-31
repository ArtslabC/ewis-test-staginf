/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function FooterLink(props) {
    return (
        <>
            <div className='flex flex-row gap-1 items-center group justify-start' >
                <Link to={props.to} className='text-white font-Rubik transition-transform group-hover:translate-x-1 text-base' >
                    {props.pageTitle}
                </Link>
                <ChevronDoubleRightIcon className='invisible w-4 h-4 text-white transition-transform group-hover:translate-x-3 group-hover:visible group-hover:text-primary'/>
            </div>
        </>

    )
}

export default FooterLink