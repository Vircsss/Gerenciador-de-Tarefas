import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDelete}) {
    return (


        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2" >
                    <button onClick={() => onTaskClick(task.id)} className={`text-left bg-slate-400 text-white p-2 rounded-md w-full ${task.isCompleted && "line-through"}`}>

                        {task.title}


                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDelete(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon />
                    </button>

                    
                </li>
            ))}
        </ul>

    )
}

export default Tasks;