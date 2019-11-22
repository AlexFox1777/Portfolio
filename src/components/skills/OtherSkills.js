import React from 'react'
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from '@material-ui/core/styles/makeStyles';
import {otherSkills} from "../text";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        margin: "auto",
        width: "80%",
        flexWrap: 'wrap',
        '& > *': {
            margin: "1%",
        },
    },
    title: {
        textAlign: "center",
        padding: "4% 0 4% 2%"
    }
});

export default function OtherSkills() {
    const classes = useStyles();
    return (
        <>
            <Typography color={"secondary"} variant={"h4"} className={classes.title}>Other Skills</Typography>
            <div className={classes.root}>
                {
                    otherSkills.map(skill => (<Chip label={skill}/>))
                }
            </div>
        </>
    )
}