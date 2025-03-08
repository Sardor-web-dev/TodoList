import { Todo } from "../../types"

interface SearchFormProps {
    todos: Array<Todo>;
}

const Tasks:React.FC<SearchFormProps> = ({todos}) => {
    return (
        <>
        {todos.map((todo:Todo) => {
            return(
                <div key={todo.id}>
                    <p>{todo.title}</p>
                    <p>{todo.completed}</p>
                    <p>{todo.added_at}</p>
                </div>
            )
        })}
        </>
    );
}
 
export default Tasks;