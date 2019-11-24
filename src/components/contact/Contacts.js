import React from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyle from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyle({
    root: {},
    title: {
        padding: "40px 0 90px 2%"
    },
});

export default function Contacts() {
    const classes = useStyles();
    return (
        <div className={classes.root} id={"contact"}>
            <Typography variant={"h4"} color={"secondary"} className={classes.title}>Contacts</Typography>
        </div>
    )
}