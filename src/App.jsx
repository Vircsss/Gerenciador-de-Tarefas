import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      isCompleted: false,
    }
    ,
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      isCompleted: false,
    }
    ,
    {
      id: 3,
      title: "Tarefa 3",
      description: "Descrição da tarefa 3",
      isCompleted: false,
    }
  ]);

  function onTestClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted
        }
      }
      return task;

    });
    setTasks(newTasks);
  }

  function onDelete(taskId) {
    const newTask = tasks.filter(task => task.id != taskId)
    setTasks(newTask)

  }

  function onAdd(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }


  return (
    <div className=" w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="space-y-4 w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        
        <AddTask onAdd={onAdd} />
        <Tasks tasks={tasks} onTaskClick={onTestClick} onDelete={onDelete}/>
      </div>
    </div>
  )
}

export default App;