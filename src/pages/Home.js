import React from 'react'
import me from '../assets/me.jpg'
import Typewriter from 'typewriter-effect'
import {useSpring, animated} from 'react-spring'

const Home = () => {

    const props = useSpring({ 
        opacity: 1,
        marginRight: 0,
        from: { opacity: 0, marginRight: -1000 },
    })

    return (
        <div className="flex flex-row min-w-screen max-w-auto justify-center align-center min-h-screen max-height-auto bg-black">
            <div className="flex flex-col w-full items-center justify-center bg-green-200">
                <div className="flex flex-col text-black text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold px-2 my-2">
                    <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString('Hi!')
                        .pauseFor(2000)
                        // .deleteAll()
                        .typeString('<br>I am Raihanul.')
                        .pauseFor(2000)
                        // .deleteAll()
                        .typeString('<br>I build stuff with Javascript!')
                        .start()
                    }}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <animated.div style={props}>
                <img className="rounded-full" src={me} alt="Pic not found"/>
                </animated.div>
            </div>
        </div>
    )
}

export default Home
