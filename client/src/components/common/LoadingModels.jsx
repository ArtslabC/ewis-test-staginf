/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function LoadingModels() {
    return (
        <>
            <div class="relative flex justify-center items-center">
                <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/time-management-4851447-4042258.png" class="rounded-full h-20 w-20" />
            </div>
        </>
    )
}
