import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    return <div className="h-screnn w-screen bg-slate-500 p-6"></div>
}

export default TaskPage;