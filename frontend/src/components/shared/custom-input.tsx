import { TextField } from "@mui/material";
import React from "react";

type props = {
  label: string;
  name: string;
  type: string;
};

const CustomizedInput = (props: props) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
};

export default CustomizedInput;
