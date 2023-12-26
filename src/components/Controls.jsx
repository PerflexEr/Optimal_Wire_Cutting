import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/system";

// Создайте пользовательский стиль для FormControl
const StyledFormControl = styled(FormControl)({
  width: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5", // Добавьте светлый фон
  borderRadius: "15px", // Сделайте углы скругленными
  padding: "10px", // Добавьте отступ вокруг контента
});

const Controls = ({ selectedTraversal, handleChange }) => (
  <StyledFormControl>
    <InputLabel id="sort-select-label">Traversal</InputLabel>
    <Select
      labelId="sort-select-label"
      id="sort-select"
      value={selectedTraversal && selectedTraversal.value}
      onChange={handleChange}
      sx={{ width: "150px" }}
      displayEmpty
      inputProps={{ "aria-label": "Sort By" }}
    >
      <MenuItem value="" disabled>
        Select Traversal
      </MenuItem>
      <MenuItem value="preorder">Preorder</MenuItem>
      <MenuItem value="inorder">Inorder</MenuItem>
      <MenuItem value="postorder">Postorder</MenuItem>
      <MenuItem value="level order">Level Order</MenuItem>
    </Select>
  </StyledFormControl>
);

export default Controls;
