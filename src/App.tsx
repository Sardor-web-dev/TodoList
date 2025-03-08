import { Todo } from "./types.tsx"
import { useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
  

function App() {

  const [todos, setTodos] = useState<Array<Todo>>([]);

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
    <div className="w-full h-screen bg-black text-white">
    <ResizablePanelGroup className="w-full h-screen" direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <form onSubmit={handleSubmit}>
          <input type="text"  name="title" />
          <button>add</button>
        </form>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
    </>
)
}

export default App
