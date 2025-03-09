import React, { useState } from "react";
import { Input } from "../ui/input";
import { Todo } from "@/types";

interface SearchFormProps {
  todos: Array<Todo>;
  setFilteredTodos: (todos: Array<Todo>) => void;
}

const Search: React.FC<SearchFormProps> = ({ todos, setFilteredTodos }) => {
  const [search, setSearch] = useState<string>("");

  const searchTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(value.toLowerCase().trim())
      );
      setFilteredTodos(filtered);
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" value={search} placeholder="Search Task" onChange={searchTask} />
    </div>
  );
};

export default Search;
