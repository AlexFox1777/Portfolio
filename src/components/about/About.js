import React, {useEffect, useState} from 'react'
//animation
import Lottie from 'react-lottie'
import programmer from './chibik-thinker'
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {about} from "../text";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    about: {
        padding: "5% 5% 3% 5%"
    },
    name: {
        padding: "0 0 5% 0",
        width: "75%",
    },
    hello: {
        whiteSpace: "nowrap",
    },
    overview: {
        width: "75%",
        lineHeight: "1.6",
    },
    containerItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    animation: {
        width: "100%"
    }
});

export default function About() {
    const classes = useStyles();
    const [speed, setSpeed] = useState(1);
    useEffect(() => {
        setSpeed(1.5)
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: programmer,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <div className={classes.about}>
                <Grid container>
                    <Grid xs={12} sm={12} md={7} item className={classes.containerItem}>
                        <div className={classes.name}>
                            <Typography color={"secondary"} variant={"h2"}>Hi!</Typography>
                            <Typography color={"secondary"} variant={"h2"} className={classes.hello}>I`m Aleksandra</Typography>
                        </div>
                        <Typography color={"secondary"} className={classes.overview}>{about}</Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={5} item className={classes.containerItem}>
                        <div className={classes.animation}>
                            <Lottie
                                isClickToPauseDisabled={true}
                                options={options}
                                speed={speed}
                                height={"100%"}
                                width={"100%"}
                            /></div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}