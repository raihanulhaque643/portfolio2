import React from 'react'

const Project = ({ name,  image, order, repoFrontend, repoBackend, email, password, url}) => {
    return (
        <div className="flex-col min-h-96 max-h-auto bg-green-300 rounded mx-2 text-black font-semibold">
            <div className="flex flex-row">
                <img src={image} alt=""/>
            </div>
            <div className="flex flex-row px-2">
                <div className="flex flex-col">
                    <div className="py-2 text-2xl font-extrabold">{name}</div>
                <div className="py-2">Repo: <a href={repoFrontend}>{repoFrontend}</a></div>
                <div className="">
                    {
                        repoBackend &&
                        <div className="py-2">Repo Backend: <a href={repoBackend}>{repoBackend}</a></div>
                    }
                </div>
                <div className="">
                {
                        email && password &&
                        <div className="py-2">Credentials: {email}, {password}</div>
                    }
                </div>
                <div className="py-2">
                    <span className="bg-red-700 rounded px-2 mr-2 text-white">Live:</span> 
                    <a href={url}>{url}</a></div>
                </div>
            </div>
        </div>
    )
}

export default Project
