const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  let DeleteHandler = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id != id);
    console.log(filteredTodo);
    setTodos(filteredTodo);
  };

  let rendertodos = todos.map((todo) => (
    <li
      key={todo.id}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded bg-gray-900"
    >
      <span className="text-lg md:text-xl font-thin mb-2 sm:mb-0">
        {todo.title}
      </span>
      <button
        className="text-sm text-red-400"
        onClick={() => DeleteHandler(todo.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="w-full md:w-[40%] p-4 md:p-10">
      <h1 className="mb-6 text-3xl md:text-5xl font-thin">
        <span className="text-pink-300">Pending</span> Todos
      </h1>
      <ol className="space-y-3">{rendertodos}</ol>
    </div>
  );
};

export default Read;
