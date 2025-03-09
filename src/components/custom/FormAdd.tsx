import { Todo } from "../../types.ts";
import { Input } from "../ui/input";
import { Button } from "..//ui/button";

interface SearchFormProps {
  todos: Array<Todo>;
  setTodos: (array: any) => void;
}

const FormForAdd: React.FC<SearchFormProps> = ({ todos, setTodos }) => {
  function handleSubmit(e: any) {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);

    const title = fm.get("title") as string;
    const completed = fm.get("isCompleted");

    const newTodo: Todo = {
      id: Math.random(),
      title,
      completed,
      addedAt: new Date().toDateString(),
    };

    setTodos([...todos, newTodo]);

    console.log(todos);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          name="title"
          placeholder="Enter task"
          className="border border-gray-300 rounded-md p-2"
        />
        <label className="flex items-center gap-2">
          <input
            name="isCompleted"
            type="checkbox"
            className="h-4 w-4"
          />
          <span>Completed</span>
        </label>
        <Button
          type="submit"
          className="size-[sm] bg-[#007FFF] hover:bg-[#007FFF] cursor-pointer"
        />
      </form>
    </>
  );
};

export default FormForAdd;
