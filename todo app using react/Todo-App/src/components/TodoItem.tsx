import React from "react";
import { MdDelete,MdEdit} from "react-icons/md";
interface TodoItemProps {
  task: string;
  index: number;
  editTask: (index: number, newTask: string) => void;
  deleteTask: (index: number) => void;
}
export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  index,
  editTask,
  deleteTask,
}) => {
  return (
    <li
      className="list-group-item flex justify-between  p-1 border border border-grey-300 rounded"
      key={index}
    >
      <span className="content-center flex-grow truncate ">{task}</span>
      <span className="shrink-0 space-x-1">
        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2  dark:focus:ring-yellow-900"
          onClick={() => editTask(index, prompt("Edit task ", task) || task)}
        >
          <MdEdit/>
        </button>

        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => deleteTask(index)}
        >
          <MdDelete />
        </button>
      </span>
    </li>
  );
};
