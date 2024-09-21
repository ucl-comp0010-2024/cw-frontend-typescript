import React from "react";
import axios from "axios";
import {
  Paper,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import { EntityModelGrade } from "../api/entityModelGrade.ts";
import { API_ENDPOINT } from "../config";

function AddGrade(props: { update: Function }) {
  const [grade, setGrade] = React.useState<EntityModelGrade>({});
  const [error, setError] = React.useState<string>();

  function request() {
    axios
      .post(`${API_ENDPOINT}/grades/addGrade`, grade)
      .then((response) => {
        props.update();
      })
      .catch((response) => {
        setError(response.message);
      });
  }

  return (
    <Paper sx={{ padding: "30px" }}>
      <Typography variant="h5">Add/Update Grade</Typography>
      <br />
      <br />
      <Button onClick={request}>Add/Update</Button>
      <br />
    </Paper>
  );
}

export default AddGrade;
