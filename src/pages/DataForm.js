import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./DataForm.css";
import { db } from "../firebase";

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

function DataForm({ user }) {
    const [name, setName] = useState([]);
    const [date, setDate] = useState([]);
    const [details, setDetails] = useState([]);
    const handleUserName = (event) => {
        setName(event.target.value);
    };
    const handlePostDate = (event) => {
        const formatDate = new Date(event.target.value).toLocaleString();
        setDate(formatDate);
    };
    const handlePostDetails = (event) => {
        setDetails(event.target.value);
    };

    //console.log("Dataform", user);
    const classes = useStyles();

    const storeDataInFirebase = (event) => {
        event.preventDefault();
        //console.log(name, date, details);

        db.collection("notesCollection")
            .add({
                id: Date.now(),
                name: name,
                email: user?.email,
                date: date,
                details: details,
            })
            .then(alert("Data has been stored"))
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="dataform">
            <h1 className="dataform__username">Hello {user?.email}</h1>
            <div className="dataform__container">
                <h1 className="dataform__header">Data Input</h1>
                <form
                    className={classes.container}
                    onSubmit={storeDataInFirebase}
                >
                    <TextField
                        onChange={handleUserName}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Your name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />

                    <TextField
                        onChange={handlePostDate}
                        id="datetime-local"
                        label="Today's date"
                        type="datetime-local"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        fullWidth
                        required
                        className={classes.textField}
                    />

                    <TextField
                        onChange={handlePostDetails}
                        id="outlined-multiline-static"
                        label="Desciption"
                        multiline
                        rows={8}
                        variant="outlined"
                        fullWidth
                        required
                        className={classes.textField}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        fullWidth
                    >
                        Save Data
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default DataForm;
