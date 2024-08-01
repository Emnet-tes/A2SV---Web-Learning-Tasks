import Reac,{useState} from 'react'

interface TodoFormProps{
  addTask:(task:string)=>void;
}
export const TodoForm :React.FC<TodoFormProps>= ({addTask}) => {
  const [newTask,setNewTask] = useState("");
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewTask(e.target.value)
  }
  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    if(newTask.trim() !== ''){
      addTask(newTask);
      setNewTask('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-between ">
          <input
          type="text"
          placeholder='Enter task ...'
          value = {newTask}
          className='flex-grow p-2 border border-grey-300 rounded mr-3'
          onChange={handleInputChange}
          />
          <button className='bg-blue-500 text-white p-2 rounded'>Add Task</button>
        </div>
    </form>
  )
}
