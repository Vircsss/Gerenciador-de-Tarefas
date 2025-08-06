import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return <div className="h-screen w-screen bg-slate-500 p-6 flex flex-col items-center justify-center space-y-4">
    <div className="text-3xl text-slate-100 font-bold text-center">
        Detalhes da Tarefa
    </div>

    <div className="bg-slate-200 w-[500px] h-[500px] flex flex-col items-start py-6 shadow rounded-md p-4 space-y-6 relative">
        <button className="absolute left-4 top-4">
            <ChevronLeftIcon />
        </button>

        <h1 className="text-slate-600 font-bold text-4xl flex justify-center items-center h-[80px] w-full text-center mt-10">
            {title}
        </h1>
        <p className="text-slate-600 text-center w-full">
            {description}
        </p>
    </div>
</div>


}

export default TaskPage;