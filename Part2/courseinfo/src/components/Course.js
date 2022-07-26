import React from 'react';

const Content = ({parts}) => { 

    let sum = parts.reduce((sum, part)=>{
        return sum + part.exercises
    }, 0)

    return(
    <>
        {parts.map(part => 
            <Part 
                key={part.id} 
                name={part.name}
                exercises={part.exercises}    
            />
        )}
        <b>total of {sum} exercises</b>
    </>)}
    
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