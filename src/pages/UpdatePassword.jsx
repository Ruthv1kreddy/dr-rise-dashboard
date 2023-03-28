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
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { redirect, useActionData, useLocation, useNavigation, useSubmit } from "react-router-dom";
import auth from "../FirebaseConfig";

const UpdatePassword = () => {
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [validinput, setvalidinput] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigation = useNavigation();
  const location = useLocation();
  // console.log(location.state);
  const handleClickShowCurrentPassword = () => setShowCurrentPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const errorData = useActionData();
  const submit = useSubmit();
  useEffect(() => {
    setvalidinput(CurrentPassword && Newpassword);
  }, [CurrentPassword, Newpassword]);
  function handleSubmit(event) {
    event.preventDefault();
    //
    submit({ CurrentPassword: CurrentPassword, NewPassword: Newpassword }, { method: "post" });
  }
  return (
    <div className="flex-1 h-[95%]  bg-[url('https://dr-rise.com/wp-content/uploads/2021/01/pharma-company-template-hero-bg.svg')] bg-center bg-cover overflow-x-hidden overflow-y-auto  bg-[#f6f8fe] rounded-[60px]  p-10 space-y-6">
      <Grid container direction={"row"} sx={{ bgcolor: "transparent" }} justifyContent={"center"}>
        <Grid item xs={12} sm={9} md={5} lg={10} xl={10}>
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
                bgcolor: "#d3eff4",
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
                  maxWidth: "320px",
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
                {/* <Typography
                  variant="h5"
                  textAlign={"center"}
                  color={"white"}
                  fontWeight="400"
                  className="font-sans font-semibold"
                >
                  Log In
                </Typography> */}
                <Typography variant="body2" textAlign={"center"} color={grey[200]} fontWeight="300">
                  Enter your current password and New password to Update
                </Typography>
              </Box>
              <Stack direction={"column"} spacing={2}>
                <Typography variant="body2" color={"error.main"}>
                  {errorData}
                </Typography>

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
                  <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                  <OutlinedInput
                    value={CurrentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    id="outlined-adornment-password"
                    type={showCurrentPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCurrentPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Current Password"
                  />
                </FormControl>
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
                  <InputLabel htmlFor="outlined-adornment-Newpassword">New Password</InputLabel>
                  <OutlinedInput
                    value={Newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    id="outlined-adornment-Newpassword"
                    type={showNewPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="New Password"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  className="bg-[#1dbfc1] hover:shadow-blue-200 hover:shadow-lg mt-10 text-white"
                  sx={{ mt: 5 }}
                  onClick={handleSubmit}
                  disabled={!validinput || navigation.state == "submitting"}
                >
                  Update Password
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
    </div>
  );
};

export default UpdatePassword;

export async function UpdatePasswordAction({ request, params }) {
  // return redirect("/", { status: 200, statusText: "ok" });
  const data = await request.formData();
  console.log(data.get("CurrentPassword"));
  console.log(data.get("NewPassword"));
  const user = auth.currentUser;

  const credential = EmailAuthProvider.credential(auth.currentUser.email, data.get("CurrentPassword"));
  let result;
  try {
    result = await reauthenticateWithCredential(user, credential);
    console.log("succes reauth");
    await updatePassword(user, data.get("NewPassword"));
    console.log("success");
    return redirect("/home");
  } catch (err) {
    if (err.code == "auth/wrong-password") {
      console.log("error reauthenticating", err);
      return "Wrong Password";
    }
    return "Unable to update";
  }

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, data.get("email"), data.get("password"));
  //     const user = userCredential.user;
  //     console.log("successfull " + user);
  //     return redirect("/home");
  //   } catch (error) {
  //     console.log(error.message, error.code);
  //     return "Invalid Username Or Password";
  //   }
}
