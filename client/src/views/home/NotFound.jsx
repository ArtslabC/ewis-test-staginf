import React from 'react'

function NotFound() {
    return (
        <>
            <section className="font-Poppins w-screen flex flex-col items-center justify-center h-screen p-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto  ">
                    <div className="flex flex-col items-center justify-center gap-5 text-center">
                        {/* <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                            <span class="sr-only">Error</span>404
                        </h2> */}
                        <img src="https://i.imgur.com/kbz0VIF.png" alt="" className='w-1/2'/>
                        <p className="text-2xl md:text-3xl dark:text-gray-300 w-full">Sorry, we couldn't find this page.</p>
                        <a href="/" className="px-8 py-2 text-lg transition-all duration-300 font-semibold rounded bg-blackFooter hover:bg-white hover:text-primary hover:px-10 hover:py-4">Back to home</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound