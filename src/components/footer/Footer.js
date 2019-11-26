import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root:{
        width: "100%",
        background: 'linear-gradient(45deg, #fa96ab 30%, #ffccb2 90%)',
        padding: "50px 0 50px 0",
        textAlign: "center"
    }
});

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography color={"secondary"}><span>&#169;</span> Developed & Designed by Aleksandra Foksman</Typography>
        </div>
    )
}