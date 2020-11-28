import { Button, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./DataForm.css";

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

function DataForm() {
    const classes = useStyles();
    return (
        <div className="dataform">
            <h1 className="dataform__username">Hello user</h1>
            <div className="dataform__container">
                <h1 className="dataform__header">Data Input</h1>
                <form className={classes.container}>
                    <TextField
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
                        Save
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default DataForm;
