import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-1">
      <Input placeholder="Buscar restaurante" className="border-none" />
      <Button size="icon" className="w-14">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
