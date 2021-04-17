import React from 'react'

const Project = ({ name,  image, order, repoFrontend, repoBackend, email, password, url}) => {
    return (
        <div className="flex-col min-h-96 max-h-auto max-w-96 border border-green-600 rounded mx-4 my-4 text-white">
            <div className="flex flex-row">
                <img src={image} alt=""/>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                <div className="py-2">Repo: <a href={repoFrontend}>{repoFrontend}</a></div>
                <div className="">
                    {
                        repoBackend &&
                        <div className="">Repo Backend: <a href={repoBackend}>{repoBackend}</a></div>
                    }
                </div>
                <div className="py-2">
                {
                        email && password &&
                        <div className="">Credentials: {email}, {password}</div>
                    }
                </div>
                <div className="py-2">
                    <span className="bg-red-700 rounded px-2 mr-2">Live:</span> 
                    <a href={url}>{url}</a></div>
                </div>
            </div>
        </div>
    )
}

export default Project
