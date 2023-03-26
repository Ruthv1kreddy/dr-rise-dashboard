import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  CircularProgress,
} from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import shadows from "@mui/material/styles/shadows";
import { alpha, Box, Stack } from "@mui/system";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { redirect, useActionData, useNavigation, useSubmit } from "react-router-dom";
import auth from "../FirebaseConfig";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validinput, setvalidinput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const errorData = useActionData();
  const submit = useSubmit();
  useEffect(() => {
    setvalidinput(username.includes("@") && password);
  }, [username, password]);
  function handleSubmit(event) {
    event.preventDefault();
    //
    submit({ email: username, password: password }, { method: "post" });
  }
  return (
    <Grid container direction={"row"} sx={{ bgcolor: "transparent" }} justifyContent={"center"}>
      <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
        <Box
          display="flex"
          marginTop={"50px"}
          alignItems="center"
          width="100%"
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box
            className="App"
            sx={{
              position: "relative",
              bgcolor: "#DBF5F5",
              px: 3,
              pb: 4,
              pt: 0,
              boxShadow: shadows[3],
              borderRadius: 3,
            }}
          >
            <Box
              className="shadow-[#d5eeee] shadow-xl space-y-10"
              sx={{
                border: "1px solid gray[500]",
                position: "relative",
                top: "-20px",
                bgcolor: "#1dbfc1",
                opacity: 1,
                zIndex: 1000,
                minHeight: "100px",
                px: 3,
                py: 3,
                boxShadow: 21,
                mb: 3,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h5"
                textAlign={"center"}
                color={"white"}
                fontWeight="400"
                className="font-sans font-semibold"
              >
                Log In
              </Typography>
              <Typography variant="body2" textAlign={"center"} color={grey[200]} fontWeight="300">
                Enter your email and password to register
              </Typography>
            </Box>
            <Stack direction={"column"} spacing={2}>
              <Typography variant="body2" color={"error.main"}>
                {errorData}
              </Typography>
              <TextField
                error={Boolean(errorData)}
                fullWidth
                sx={{
                  "& .MuiInput-root:hover::before": {
                    borderBottom: "1px solid #a1a1a1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      // borderColor: "red",
                      backgroundColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: blue[200],
                    },
                    "&:hover.Mui-focused fieldset": {
                      // borderColor: "#1976d2",
                      borderColor: "#1dbfc1",
                    },
                    "&.Mui-focused": {
                      // boxShadow: `${alpha("#1976d2", 0.25)} 0 0 0 2px`,
                      // borderWidth: 2,
                      borderColor: "#1dbfc1",
                    },
                    "&.Mui-focused fieldset": {
                      // boxShadow: `${alpha("#1976d2", 0.25)} 0 0 0 2px`,
                      borderWidth: 2,
                      borderColor: "#1dbfc1",
                    },
                  },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormControl
                sx={{
                  "& .MuiInput-root:hover::before": {
                    borderBottom: "1px solid #a1a1a1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      // borderColor: "red",
                      backgroundColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: blue[200],
                    },
                    "&:hover.Mui-focused fieldset": {
                      // borderColor: "#1976d2",
                      borderColor: "#1dbfc1",
                    },
                    "&.Mui-focused": {
                      // boxShadow: `${alpha("#1976d2", 0.25)} 0 0 0 2px`,
                      // borderWidth: 2,
                      backgroundColor: "transparent",
                      borderColor: "#1dbfc1",
                    },
                    "& .MuiInputBase-input": {
                      backgroundColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      // boxShadow: `${alpha("#1976d2", 0.25)} 0 0 0 2px`,
                      borderWidth: 2,
                      borderColor: "#1dbfc1",
                    },
                  },
                }}
                fullWidth
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                variant="contained"
                className="bg-[#1dbfc1] hover:shadow-blue-200 hover:shadow-lg mt-10 text-white"
                sx={{ mt: 5 }}
                onClick={handleSubmit}
                disabled={!validinput || navigation.state == "submitting"}
              >
                Sign In
                {navigation.state == "submitting" && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
export async function loginaction({ request, params }) {
  const data = await request.formData();
  console.log(data.get("email"));
  console.log(data.get("password"));
  try {
    const userCredential = await signInWithEmailAndPassword(auth, data.get("email"), data.get("password"));
    const user = userCredential.user;
    console.log("successfull " + user);
    return redirect("/home");
  } catch (error) {
    console.log(error.message, error.code);
    return "Invalid Username Or Password";
  }
}
