const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Content = (props) => {
  let res = [];
  props.course.parts.forEach((ele) => {
    res.push(<p>{ele.name} {ele.exercises}</p>)
  });

  return (
    <>
      {res}
    </>
  )
}
const Total = (props) => {
  let res = 0;
  props.course.parts.forEach((ele) => {
    res += ele.exercises
  })
  return (
    <>
      <p>Number of exercises {res}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App