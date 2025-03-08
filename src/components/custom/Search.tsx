import { Button } from "..//ui/button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Search Task" />
        <Button variant="outline" className="hover:text-white hover:bg-gray-500 bg-black cursor-pointer">Search</Button>
      </div>
    </>
  );
};

export default Search;
