import React from 'react'
import {useSpring, animated} from 'react-spring'

const Project = ({ name,  image, order, repoFrontend, repoBackend, email, password, url, technology}) => {

    const props = useSpring({ 
        
        marginRight: 0,
        from: {  marginRight: -1000 }
    })

    return (
        <animated.div style={props}>
        <div className="flex-col min-h-96 max-h-auto rounded mx-2 text-black text-white border-b sm:border-none">
            <div className="flex flex-row">
                <img src={image} alt=""/>
            </div>
            <div className="flex flex-row px-2">
                <div className="flex flex-col">
                    <div className="py-2 text-2xl font-extrabold">{name}</div>
                <div className="py-2">Repo: <a className="hover:text-blue-700" target="_blank" rel="noreferrer" href={repoFrontend}>{repoFrontend}</a></div>
                {
                    repoBackend &&
                    <div className="py-2">Repo Backend: <a className="hover:text-blue-700" target="_blank" rel="noreferrer" href={repoBackend}>{repoBackend}</a></div>
                }
                {
                    technology && 
                    <div className="py-2">Technologies: 
                    <div className="font-semibold">
                    {technology}
                    </div>
                    </div>
                }
                {
                        email && password &&
                        <div className="py-2">Credentials: {email}, {password}</div>
                }
                <div className="py-2">
                    <span className="bg-red-700 rounded px-2 mr-2 text-white">Live:</span> 
                        <a className="hover:text-blue-700" target="_blank" rel="noreferrer" href={url}>{url}</a>
                </div>
                </div>
            </div>
        </div>
        </animated.div>
    )
}

export default Project
