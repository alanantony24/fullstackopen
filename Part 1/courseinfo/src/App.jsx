const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.partNo} {props.noOfExercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partNo={props.parts[0].name} noOfExercises={props.parts[0].noOfExercises} />
      <Part partNo={props.parts[1].name} noOfExercises={props.parts[1].noOfExercises} />
      <Part partNo={props.parts[2].name} noOfExercises={props.parts[2].noOfExercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total[0].noOfExercises + props.total[1].noOfExercises + props.total[2].noOfExercises}</p>
  )
}

const App = () => {
  const course =  {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', noOfExercises: 10},
      {name: 'Using props to pass data', noOfExercises: 7},
      {name: 'State of a component', noOfExercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App
