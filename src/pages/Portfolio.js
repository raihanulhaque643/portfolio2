import React, { useEffect, useState } from 'react'
import Project from '../components/Project.js'
import db from '../firebase/firebase.js'

const Portfolio = () => {

    let [projects, setProjects] = useState(null)

    // fetch all projects from firebase
    useEffect(() => {
        const myArray= []
        db.collection("projects").orderBy("order", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                myArray.push(doc.data())
            });
        }).then(() => {
            setProjects(myArray)
        }).then(() => {
            console.log(projects)
        })

    }, [])

    return (
        <div className="min-w-screen max-w-auto min-h-screen max-height-auto bg-black">
            {
                projects &&
                projects.map((project) => {
                    return <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    repoFrontend={project.repoFrontend}
                    repoBackend={project.repoBackend}
                    email={project.email}
                    password={project.password}
                    url={project.url}
                    />
                })    
            }
        </div>
    )
}

export default Portfolio
