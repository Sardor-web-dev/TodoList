import { Todo } from "../../types.ts"


interface SearchFormProps {
    todos: Array<Todo>;
    setTodos: (array: any) => void;
  }

const FormForAdd:React.FC<SearchFormProps> = ({todos, setTodos}) => {
    
  function handleSubmit (e: any) {
    
    e.preventDefault();

    const fm = new FormData(e.currentTarget)

    const title = fm.get("title") as string

    const newTodo: Todo = {
      id:Math.random(),
      title,
      completed: false,
      added_at: new Date().toISOString(),
    }

    setTodos([...todos, newTodo]);


    console.log(todos);
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <button>add</button>
      </form>
    </>
  );
}

export default FormForAdd;
