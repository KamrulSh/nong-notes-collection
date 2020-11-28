import React, { useState } from "react";
import logo from "../nonglogo.webp";
import "./Login.css";
import { TextField, Button, makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");
    const classes = useStyles();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();
        //console.log(email);
        //console.log(password);
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //console.log("Login", auth);
                history.push("/home");
            })
            .catch((error) => {
                //console.log(error);
                alert(error);
            });
    };

    return (
        <div className="login">
            <img className="login__logo" src={logo} alt="logo" />
            <div className="login__container">
                <LockOutlinedIcon className="login__lockIcon" />
                <h1 className="login__header">Log In</h1>
                <form className="login__form">
                    <TextField
                        onChange={handleEmailChange}
                        variant="outlined"
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
                        onChange={handlePasswordChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        onClick={handleSubmitButton}
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
