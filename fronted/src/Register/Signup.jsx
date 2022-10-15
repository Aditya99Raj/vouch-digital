import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Login from "./Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [isRegister, setRegister] = useState(false);
  const [openlogin, setOpen] = useState(false);
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // postData()
  }, []);
  const payload = {
    username: info.username,
    email: info.email,
    password: info.password,
  };

  console.log({ payload });

  const postData = () => {
    try {
      axios.post("http://localhost:8080/user/register", payload).then((res) => {
        // const response = res.data
        console.log(res.data);
        setRegister(true);
      });
    } catch (err) {
      setRegister(false);
      console.log(" registration failed");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    console.log("hi");
    setInfo({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    //    console.log(id,value)
    setInfo({ ...info, [id]: value });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClickShowPassword = () => {
    setInfo({
      ...info,
      showPassword: !info.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log({ info });
  return (
    <>
      <form onSubmit={handleSubmit}>
        {openlogin ? (
          <>
            <Login />
          </>
        ) : (
          <>
            {isRegister ? (
              <>
                <Login />
              </>
            ) : (
              <>
                <Grid container md={12} sm={12}>
                  <Grid
                    container
                    item
                    padding={2}
                    spacing={2}
                    md={5}
                    style={{ marginBlockStart: "100px", paddingLeft: "80px" }}
                  >
                    <Grid item>
                      <Grid item md={12}>
                        <Typography variant="h4">Welcome</Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography variant="subtitle2">REGISTER</Typography>
                      </Grid>
                      <Grid item md={12} style={{ paddingTop: "10px" }}>
                        <TextField
                          id="username"
                          fullWidth
                          label="name"
                          multiline
                          maxRows={4}
                          value={info.name}
                          onChange={handleChange}
                          size="medium"
                        />
                      </Grid>
                      <Grid item md={12} style={{ paddingTop: "10px" }}>
                        <TextField
                          required
                          id="email"
                          fullWidth
                          label="email"
                          multiline
                          maxRows={4}
                          value={info.email}
                          onChange={handleChange}
                          size="medium"
                          style={{ width: "550px" }}
                        />
                      </Grid>
                      <Grid item md={12} style={{ paddingTop: "10px" }}>
                        <FormControl sx={{ width: "550px" }} variant="outlined">
                          <InputLabel>Password</InputLabel>
                          <OutlinedInput
                            fullWidth
                            required
                            id="password"
                            size="medium"
                            // label="password"
                            type={info.showPassword ? "text" : "password"}
                            value={info.password}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {info.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="P"
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Grid md={5}>
                          <Typography variant="subtitle2">
                            Registered ? Click to login
                          </Typography>
                        </Grid>
                        <Grid md={5}>
                          <Tooltip title="Click To Login">
                            <EastSharpIcon
                              fontSize="large"
                              color="primary"
                              // style={{backgroundColor:'yellow'}}
                              onClick={handleOpen}
                            />
                          </Tooltip>
                        </Grid>
                      </Grid>
                      <Grid item md={12}>
                        <Tooltip title="Submit">
                          <Button variant="contained" onClick={handleSubmit}>
                            Register
                          </Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    item
                    md={6}
                    style={{
                      // marginLeft:'10px',
                      // padding:'80px',
                      backgroundColor: "#1334b3",
                      width: "500px",
                      height: "720px",
                      marginInlineStart: "100px",
                    }}
                  >
                    <Grid>
                      <Grid
                        style={{
                          backgroundColor: "#FFFFFF",
                          width: "300px",
                          height: "200px",
                          position: "absolute",
                          borderRadius: "10px",
                          // boxShadow: "0px 12px 48px 0px rgba(3, 0, 55, 0.15)",
                          // left: "93px",
                          top: "220px",
                          right: "220px",
                        }}
                      ></Grid>
                      <Grid
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid yellow",
                          width: "350px",
                          height: "250px",
                          position: "absolute",
                          borderRadius: "8px",
                          boxShadow: "0px 12px 48px rgba(3, 0, 55, 0.15)",
                          opacity: "0.15",
                          top: "194px",
                          right: "200px",
                        }}
                      ></Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          position: "absolute",
                          top: "500px",
                          color: "white",
                          right: "235px",
                        }}
                      >
                        360° Solution for Asset Management
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          position: "absolute",
                          top: "525px",
                          color: "white",
                          variant: "h2",
                          fontSize: "10px",
                          right: "235px",
                        }}
                      >
                        360° Solution for Asset Management hjhjsdhuasjhkj
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </>
        )}
      </form>
    </>
  );
};

export default Signup;
