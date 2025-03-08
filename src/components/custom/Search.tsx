import React, { useState } from "react";
import { Button } from "..//ui/button";
import { Input } from "../ui/input";
import { Todo } from "@/types";

interface SearchFormProps {
  todos: Array<Todo>;
  setTodos: (array: any) => void;
}

const Search: React.FC<SearchFormProps> = ({ todos, setTodos }) => {
  const [search, setSearch] = useState<string>("");
  const searchTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setTodos(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(value.toLowerCase().trim())
      );
      setTodos(filtered);
    }
  };
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" value={search} placeholder="Search Task" onChange={searchTask} />
        <Button
          variant="outline"
          className="hover:text-white hover:bg-gray-500 bg-black cursor-pointer"
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default Search;
