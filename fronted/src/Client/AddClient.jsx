import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  textfield: {
    width: "500px",
  },
});

const AddClient = () => {
  const classes = useStyles();
  const [info, setInfo] = useState({
    company: "",
    email: "",
    phone: "",
    contact: "",
  });

  const payload = {
    company: info.company,
    email: info.email,
    phone: info.phone,
    contact: info.contact,
  };

  console.log({ payload });

  const postData = () => {
    try {
      axios
        .post("http://localhost:8080/client/addclients", payload)
        .then((res) => {
          // const response = res.data
          console.log(res.data);
          // setRegister(true);
        });
    } catch (err) {
      //   setRegister(false);
      console.log(" registration failed");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    console.log("hi");
    setInfo({
        company: "",
        email: "",
        phone: "",
        contact: "",
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    //    console.log(id,value)
    setInfo({ ...info, [id]: value });
  };

  return (
    <>
      <div>AddClient</div>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={1} md={12} sm={12}>
            <Grid item md={12} sm={12} className={classes.textfield}>
              <TextField
                label="Company"
                id="company"
                variant="outlined"
                size="large"
                value={info.company}
                onChange={handleChange}
                className={classes.textfield}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={info.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                value={info.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                label="Contact"
                id="contact"
                variant="outlined"
                value={info.contact}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        <Button
          className={classes.btn}
          variant="outlined"
          onClick={handleSubmit}
        >
          Add Client
        </Button>
      </form>
    </>
  );
};

export default AddClient;
