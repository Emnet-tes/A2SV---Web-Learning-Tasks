import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks([...tasks, task]);
  }

  function editTask(index: number, newTask: string) {
    const newTasks = tasks.map((task, idx) => (idx === index ? newTask : task));
    setTasks(newTasks);
  }

  function deleteTask(index: number) {
    const updateTasks = tasks.filter((_, idx) => idx != index);
    setTasks(updateTasks);
  }
  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Todo List</h2>
        <TodoForm addTask={addTask} />
        <ul className="list-group list-none">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
