import { useState, useEffect } from "react";
import { Todo } from "./types.ts";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FormForAdd from "./components/custom/FormAdd";
import Search from "./components/custom/Search.tsx";
import Tasks from "./components/custom/Tasks.tsx";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [filteredTodos, setFilteredTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className="w-full h-screen bg-black text-white">
      <ResizablePanelGroup className="w-full h-screen" direction="horizontal">
        <ResizablePanel className="flex flex-col gap-2 items-center p-5 ">
          <Search todos={todos} setFilteredTodos={setFilteredTodos} />
          <Tasks filteredTodos={filteredTodos} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="flex items-center justify-center">
          <FormForAdd  todos={todos} setTodos={setTodos} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
