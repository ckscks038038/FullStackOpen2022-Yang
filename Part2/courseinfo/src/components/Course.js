import React from 'react';

const Content = ({parts}) => ( 
    <>
        {parts.map(part => 
            <Part 
                key={part.id} 
                name={part.name}
                exercises={part.exercises}    
            />
        )}
    </>)
    
const Part = ({name, exercises}) => {
    return <p>{name} {exercises}</p>
}

const Course = ({course}) => {
    return (
        <>
            <h1>{course.name}</h1>
            <Content parts={course.parts}/>
        </>
    )
}
export default Course