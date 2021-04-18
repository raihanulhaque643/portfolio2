import React from 'react'
import {useSpring, animated} from 'react-spring'

const Project = ({ name,  image, order, repoFrontend, repoBackend, email, password, url}) => {

    const props = useSpring({ 
        
        marginRight: 0,
        from: {  marginRight: -1000 }
    })

    return (
        <animated.div style={props}>
        <div className="flex-col min-h-96 max-h-auto bg-green-200 rounded mx-2 text-black font-semibold">
            <div className="flex flex-row">
                <img src={image} alt=""/>
            </div>
            <div className="flex flex-row px-2">
                <div className="flex flex-col">
                    <div className="py-2 text-2xl font-extrabold">{name}</div>
                <div className="py-2 hover:text-blue-700">Repo: <a target="_blank" href={repoFrontend}>{repoFrontend}</a></div>
                {
                    repoBackend &&
                    <div className="py-2  hover:text-blue-700">Repo Backend: <a target="_blank" href={repoBackend}>{repoBackend}</a></div>
                }
                <div className="">
                {
                        email && password &&
                        <div className="py-2">Credentials: {email}, {password}</div>
                    }
                </div>
                <div className="py-2 hover:text-blue-700">
                    <span className="bg-red-700 rounded px-2 mr-2 text-white">Live:</span> 
                        <a className="" target="_blank" href={url}>{url}</a>
                </div>
                </div>
            </div>
        </div>
        </animated.div>
    )
}

export default Project
