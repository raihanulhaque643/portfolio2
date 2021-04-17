import React from 'react'

const Project = ({ name,  image, order, repoFrontend, repoBackend, email, password, url}) => {
    return (
        <div className="flex-col">
            <div className="">{name}</div>
            <div className="">{image}</div>
            <div className="">{order}</div>
            <div className="">{repoFrontend}</div>
            <div className="">{repoBackend}</div>
            <div className="">{email}</div>
            <div className="">{password}</div>
            <div className="">{url}</div>
        </div>
    )
}

export default Project
