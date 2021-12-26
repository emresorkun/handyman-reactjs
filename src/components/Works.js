import React from 'react'
//import Post from './Post'

const Works = ({ works }) => {
    return (
        <div>
            {works.map((work, index) => <Work work={work} key={index} />)}
        </div>
    )
}

export default Works