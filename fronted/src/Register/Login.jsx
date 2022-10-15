import React, { useEffect, useState } from "react";
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
import Client from "../Client/Client";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [isLogged, setLogged] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // postData()
  }, []);
  const payload = {
    email: info.email,
    password: info.password,
  };

  // console.log({payload})

  const postData = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:8080/user/login", payload).then((res) => {
        const response = res.data;
        // window.location.href = 'http://www.google.com';
        setLogged(true);
        // console.log(response);
      });
    } catch (err) {
      console.log("something went wrong");
    }

    setInfo({
      email: "",
      password: "",
    });
    // window.location.href='http://www.google.com';
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    // console.log(id, value);
    setInfo({ ...info, [id]: value });
  };
  //   console.log({ info });

  return (
    <>
      {isLogged ? (
        <>
          <Client />
        </>
      ) : (
        <>
          {" "}
          <form onSubmit={handleSubmit}>
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
                    <Typography variant="subtitle2">
                      Enter Your Email and Password
                    </Typography>
                  </Grid>
                  {/* <Grid item md={12} style={{ paddingTop: "10px" }}>
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
                      </Grid> */}
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
                  <Grid item md={12} style={{ paddingTop: "20px" }}>
                    <Tooltip title="Submit">
                      <Button variant="contained" onClick={handleSubmit}>
                        LOGIN
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
          </form>
        </>
      )}
    </>
  );
};

export default Login;
