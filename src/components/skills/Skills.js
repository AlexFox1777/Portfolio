import React from 'react'
//material
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    background: {
        background: 'linear-gradient(45deg, #fa96ab 30%, #ffccb2 90%)',
        height: "300px",
        width: "100%",
    },
});

export default function Skills() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.background}></div>
        </>
    )
}



