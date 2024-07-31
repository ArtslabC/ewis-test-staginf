/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { InboxIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { BuildingOffice2Icon } from '@heroicons/react/24/solid'
import React from 'react'

function OffcieAddress(props) {
    return (
        <>
            <div className='flex flex-col items-start justify-center gap-2'>
                <div className='flex flex-row items-start justify-center gap-5'>
                    <div>
                        <BuildingOffice2Icon className='w-5 h-5 text-white' />
                    </div>

                    <p className='font-Rubik text-white text-sm'>{props.address}</p>
                </div>
                <div className='flex flex-row items-start justify-start gap-5'>
                    <div>
                        <PhoneIcon className='w-5 h-5 text-white' />
                    </div>

                    <p className='font-Rubik text-white text-sm'>{props.tel}</p>
                </div>
                <div className='flex flex-row items-start justify-start gap-5'>
                    <div>
                        <InboxIcon className='w-5 h-5 text-white' />
                    </div>

                    <p className='font-Rubik text-white text-sm'>{props.fax}</p>
                </div>
            </div>
        </>
    )
}

export default OffcieAddress