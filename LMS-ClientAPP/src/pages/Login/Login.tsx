import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../redux/feature/auth/authAPI";
import { jwtDecode } from "jwt-decode";
import { TUser } from "../../Types/user.type";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export const Login = () => {
  const [login, { error }] = useLoginMutation();
  const dispatcher = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (data.get("email") === "" || data.get("password") === "") {
      toast.error("Email or Password field empty");
    } else {
      const toastId = toast.loading("Logging in.....");
      try {
        const userInfo = {
          email: data.get("email"),
          password: data.get("password"),
        };
        const res = await login(userInfo).unwrap();
        // console.log(res);
        const user = jwtDecode(res.accesToken) as TUser;
        console.log(user);

        dispatcher(setUser({ user: user, token: res.accesToken }));
        toast.success("Logged in seccessfully", { id: toastId });
        navigate("/");
      } catch (erro) {
        console.log(error);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "gray" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: "green",
                    "&.Mui-checked": {
                      color: "green",
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "green",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
