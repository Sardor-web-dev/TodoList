import { Todo } from "../../types";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button } from "..//ui/button";


import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

interface TasksProps {
  filteredTodos: Array<Todo>;
  deleteTodo: (id: number) => void; 
}

const Tasks: React.FC<TasksProps> = ({ filteredTodos, deleteTodo }) => {
  return (
    <>
<div className="overflow-x-auto shadow-lg rounded-md bg-white text-black">
<Table className="min-w-full">
  <TableHeader className="bg-gray-200">
    <TableRow>
      <TableCell className="font-semibold">Title</TableCell>
      <TableCell className="font-semibold">Created At</TableCell>
      <TableCell className="font-semibold">Completed</TableCell>
      <TableCell className="font-semibold">Actions</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    {filteredTodos.map((todo) => (
      <TableRow key={todo.id} className="hover:bg-gray-100">
        <TableCell>{todo.title}</TableCell>
        <TableCell>{todo.addedAt}</TableCell>
        <TableCell>{todo.completed ? "Done" : "Not Done"}</TableCell>
        <TableCell>
          <div className="flex gap-2">
            <Button className="text- black bg-white hover:bg-white cursor-pointer">Edit <FaEdit  /></Button>
            <Button onClick={() => deleteTodo(todo.id)} className="text- black bg-white hover:bg-white cursor-pointer">Delete <MdDelete /></Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table> 
</div>
    </>
  );
};

export default Tasks;
