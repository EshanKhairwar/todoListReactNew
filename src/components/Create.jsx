import { nanoid } from "nanoid";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];

    copytodos.push(data);
    setTodos(copytodos);
    toast.success("Todo Created")
    reset();
  };

  return (
    <div className="w-full md:w-[60%] p-4 md:p-10">
      <h1 className="mb-6 text-3xl md:text-5xl font-thin">
        Sets <span className="text-red-400">Reminders</span> for{" "}
        <br className="hidden md:block" /> Task
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register("title", { required: "title cannot be empty" })}
          className="border-b w-full text-xl md:text-2xl font-thin p-2 outline-0 bg-transparent"
          type="text"
          placeholder="title"
        />
        {/* {
          errors && errors.title && errors.title.message && (<small className="text-red-400">{errors.title.message}</small>)
        } */}

        {
          <small className="font-thin text-red-500">
            {errors?.title?.message}
          </small>
        }
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
