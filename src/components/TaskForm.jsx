import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  //Estado del titulo ingresado en el input
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);
  //Ejecucion del submit del boton
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ titulo, descripcion });
    setDescripcion("");
    setTitulo("");
  };

  return (
    <div className="max-w-md mx-auto">
      
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      < h1 className="mb-2 text-white font-bold text-2xl">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bg-slate-300 p-2 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-2 w-full mb-2"
        />
        <button className="bg-indigo-500 text-white p-2">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
