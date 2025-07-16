import { nanoid } from "nanoid";
import  { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const [title, setTitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };

    let copytodos = [...todos];
    copytodos.push(newTodo);
    setTodos(copytodos);
    setTitle(""); // clear input
  };

  return (
   <div className="w-full md:w-[60%] p-4 md:p-10">
  <h1 className="mb-6 text-3xl md:text-5xl font-thin">
    Sets <span className="text-red-400">Reminders</span> for <br className="hidden md:block" /> Task
  </h1>
  <form onSubmit={SubmitHandler}>
    <input
      className="border-b w-full text-xl md:text-2xl font-thin p-2 outline-0 bg-transparent"
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      value={title}
      placeholder="title"
    />
    <br />
    <br />
    <button className="text-base md:text-xl px-6 py-2 border rounded-2xl">
      Create Todo
    </button>
  </form>
</div>

  );
};

export default Create;
