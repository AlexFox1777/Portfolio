import React, {useEffect, useRef, useState} from 'react'
//animation
import Lottie from 'react-lottie'
import programmer from './chibik-thinker'
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {about} from "../text";
import Box from "@material-ui/core/Box";
import ScrollMagic from 'scrollmagic';

const useStyles = makeStyles(theme => ({
    about: {
        padding: "5% 5% 3% 5%",
    },
    hide: {
        opacity: 0,
        transition: 'all 1s ease-in-out',
        transform: "translateX(-50px)"
    },
    show: {
        opacity: 1,
        transform: "translateX(0px)"
    },
    name: {
        padding: "0 0 5% 0",
    },
    hello: {
        whiteSpace: "nowrap",
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center"
        },
    },
    overview: {
        lineHeight: "1.6",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        },
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
}));

export default function About() {
    const classes = useStyles();
    const [speed, setSpeed] = useState(1);
    let title = useRef(null);
    const controller = new ScrollMagic.Controller();

    useEffect(() => {
            new ScrollMagic.Scene({
                triggerElement: title,
                triggerHook: 0.9, // show, when scrolled 10% into view
                // duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 20, // move trigger to center of element
                reverse: false,
            })
                .setClassToggle(title, classes.show) // add class to reveal
                .addIndicators()
                .addTo(controller); // assign the scene to the controller
        }
        , []);

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
            <div className={classes.about} id="about">
                <Grid container>
                    <Grid xs={12} sm={12} md={7} item className={classes.containerItem}>
                        <div className={classes.hide} ref={el => title = el}>
                            <div className={classes.name}>
                                <Typography color={"secondary"} variant={"h2"}className={classes.hello}  component={"h2"}>Hi!</Typography>
                                <Typography color={"secondary"} variant={"h2"} className={classes.hello}>
                                    I`m Aleksandra
                                </Typography>
                            </div>
                            <Typography color={"secondary"} className={classes.overview}>{about}</Typography>
                        </div>
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