import { useState } from "react"
import { Todo } from "./types.ts"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import FormForAdd from "./components/custom/FormAdd";
import Search from "./components/custom/Search.tsx";
  

function App() {

  const [todos, setTodos] = useState<Array<Todo>>([]);



  return (
    <>
    <div className="w-full h-screen bg-black text-white">
    <ResizablePanelGroup className="w-full h-screen" direction="horizontal">
      <ResizablePanel>
        <Search/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <FormForAdd todos={todos} setTodos = {setTodos}/>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
    </>
)
}

export default App
