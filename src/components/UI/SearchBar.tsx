import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

interface SearchBarProps {
  onInputSearch: (searchQuery: string) => void;
}

const SearchBar = ({ onInputSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.currentTarget.value;

    setQuery(searchQuery);
  };

  useEffect(() => {
    onInputSearch(query);
  }, [query]);

  return (
    <div>
      <TextField
        id="outlined-search"
        label="Search by name"
        type="search"
        onChange={onChangeValue}
        value={query}
        variant="standard"
      />
    </div>
  );
};

export default SearchBar;
