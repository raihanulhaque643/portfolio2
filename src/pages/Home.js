import React from 'react'
import me from '../assets/me.jpg'

const Home = () => {
    return (
        <div className="flex flex-row min-w-screen max-w-auto justify-center align-center min-h-screen max-height-auto bg-black">
            <div className="flex flex-col w-full items-center justify-center bg-green-200">
                <div className="flex flex-col text-black text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold px-2">
                <span className="my-2">Hi.</span>
                <span className="my-2">I'm Raihanul.</span>
                <span className="my-2">I build stuff with Javascript.</span>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <img className="rounded-full" src={me} alt="Pic not found"/>
            </div>
        </div>
    )
}

export default Home
