import { Todo } from "../../types.ts"
import { Input } from "../ui/input";
import { Button } from "..//ui/button";


interface SearchFormProps {
    todos: Array<Todo>;
    setTodos: (array: any) => void;
  }

const FormForAdd:React.FC<SearchFormProps> = ({todos, setTodos}) => {
    
  function handleSubmit (e: any) {
    
    e.preventDefault();

    const fm = new FormData(e.currentTarget)

    const title = fm.get("title") as string
    const completed = fm.get("isCompleted") as string

    const newTodo: Todo = {
      id:Math.random(),
      title,
      completed,
      added_at: new Date().toDateString()
    }

    setTodos([...todos, newTodo]);


    console.log(todos);
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Task title" name="title" />
        <select name="isCompleted">
          <option className="text-white bg-black rounded-2xl gap-2 " value="false">Not Completed</option>
          <option className="text-white bg-black rounded-2xl gap-2 " value="true">Completed</option>
        </select>
        <Button>Add New Task</Button>  
      </form>
    </>
  );
}

export default FormForAdd;
