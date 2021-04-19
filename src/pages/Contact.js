import React from 'react'
import Typewriter from 'typewriter-effect'
import {useSpring, animated} from 'react-spring'

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
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
                        typewriter.typeString('Feel free to reach out to me.')
                        .start()
                    }}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center text-white text-5xl">
                <animated.div style={props} className="flex flex-col">
                    <a className="transform hover:rotate-45" target="_blank" rel="noreferrer" href="https://www.facebook.com/raihanul.haque/">
                        <FontAwesomeIcon className="my-4" icon={faFacebook} />
                    </a>
                    <a className="transform hover:rotate-45" target="_blank" rel="noreferrer" href="https://github.com/raihanulhaque643">
                    <FontAwesomeIcon className="my-4" icon={faGithub} />
                    </a>
                    <a className="transform hover:rotate-45" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/raihanul-haque-a310ba158/">
                    <FontAwesomeIcon className="my-4" icon={faLinkedin} />
                    </a>
                </animated.div>
            </div>
        </div>
    )
}

export default Contact
