import React, { useState } from "react";

import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, setTodos] = useState([
  ]);

  return (
    <div className="text-white flex flex-col md:flex-row w-full min-h-screen bg-gray-800 p-4 md:p-10">
  <Create todos={todos} setTodos={setTodos} />
  <hr className="my-4 md:hidden" />
  <Read todos={todos} setTodos={setTodos} />
</div>
  );
};

export default App;
