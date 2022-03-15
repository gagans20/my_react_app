import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, {useState} from 'react'; 
function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  console.log(tasks);
  function addTask(name) {
    alert(name);
    const newTask= {id:"id", name: name, completed: false};
    setTasks([...tasks, newTask]);
  }
  const taskList= tasks.map(task=> <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>);
  const taskNoun= taskList.length===1?'task':'tasks';
  const headingText='${taskList.length} ${taskNoun} remaining';
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <Todo name="Eat" completed={true} id="todo-0"/>
        <Todo name="Sleep" completed={false} id="todo-1"/>
        <Todo name="Repeat" completed={false} id="todo-2"/> */}
        {taskList}
      </ul>
    </div>
  );
}


export default App;
