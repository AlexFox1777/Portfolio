import React from 'react';
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        // marginTop: "1000px"
    },
    title: {
        padding: "40px 0 90px 2%"
    },
});

export default function Education() {
    const classes = useStyles();
    return (
        <Paper elevation={3}  square={true} className={classes.root}>
            <Typography variant={"h4"} color={"secondary"} className={classes.title}>My Education </Typography>
        </Paper>
    )
}