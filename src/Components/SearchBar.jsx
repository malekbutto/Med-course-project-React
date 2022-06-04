import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState([]);


  return (
    <div className="search">
      <Autocomplete
        className="search__container"
        sx={{
          input: { color: "black" },
          width: 175,
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
        }}
        options={data}
        value={data.find((x) => x.productName === searchFilter)}
        getOptionLabel={(option) => `${option.title}`}
        filterSelectedOptions
        size="meduim"
        includeInputInList
        renderInput={(params) => (
          <TextField
            className="search__text"
            sx={{
              "& .MuiInputLabel-root": { color: "black" }, //styles label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "gray" },
              },
            }}
            {...params}
            value={searchFilter.title}
            name="search"
            label="Search a product"
            variant="outlined"
          />
        )}
        onChange={(e, obj) => {
          let categoryName;
          if (obj === null) return;
          else if (obj.id >= 1 && obj.id <= 45)
            categoryName = "sweets";
          else if (obj.id >= 51 && obj.id <= 75)
            categoryName = "pastries";
          else if (obj.id >= 81 && obj.id <= 95)
            categoryName = "ourCuisine";
          navigate(`/category/${categoryName}`);
        }}
      />
    </div>
  );
};

export default SearchBar;
