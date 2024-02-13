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
      <Part partNo={props.parts.part1} noOfExercises={props.parts.noOfExercises1} />
      <Part partNo={props.parts.part2} noOfExercises={props.parts.noOfExercises2} />
      <Part partNo={props.parts.part3} noOfExercises={props.parts.noOfExercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total.exercises1 + props.total.exercises2 + props.total.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={{part1: part1, noOfExercises1: exercises1, part2: part2, noOfExercises2: exercises2, part3: part3, noOfExercises3: exercises3}} />
      <Total total={{exercises1: exercises1, exercises2: exercises2, exercises3: exercises3}} />
    </div>
  )
}

export default App
