import { useState } from "react";
function AddTask({ onAdd }) {
    const [title, setTittle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">

            <input
                type="text"
                value={title}
                placeholder="Digite o título da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                onChange={(event) => setTittle(event.target.value)}
            />
            <input

                type="text"
                value={description}
                placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                onChange={(event) => setDescription(event.target.value)}
            />

            <button
                type="button"
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => {
                    if (!description.trim() || !title.trim()){
                        return alert("Preencha corretamente")
                    }

                    onAdd(title, description)
                    setDescription("");
                    setTittle("");
                }}
            >
                adicionar
            </button>

        </div>
    )
}

export default AddTask;