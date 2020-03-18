import React, {useRef, useEffect} from 'react'
//imgs
import JS from './resources/js.svg';
import REACT from './resources/react.svg';
import REDUX from './resources/redux.svg';
import SQL from './resources/sql.svg';
import NODE from "./resources/node.svg";
import PYTHON from "./resources/python.svg";
import VUE from './resources/vue.svg'
//animation
import {TweenMax, Power3} from 'gsap';
import {Controller, Scene} from "scrollmagic";
//components
import OtherSkills from "./OtherSkills";
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SkillCard from "./SkillCard";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(theme => ({
    background: {
        background: 'linear-gradient(45deg, #fa96ab 30%, #ffccb2 90%)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 350px",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            background: 'white',
        },
    },
    cards: {
        paddingTop: "10px",
        opacity: 0,
        transition: 'all 1s ease-in-out'
    },
    cardContainer: {
        margin: 'auto',
        width: '90%',
        maxWidth: '1500px'
    },
    title: {
        padding: "90px 0 130px 2%",
        boxSizing: "border-box",
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            fontWeight: "bold",
        },
    },
    visible: {
        opacity: 1,
        transform: "translateY(-50px)"
    }
}));

export default function Skills() {
    const classes = useStyles();
    let cardItem = useRef(null);
    const controller = new Controller();

    useEffect(() => {
            new Scene({
                triggerElement: cardItem,
                triggerHook: 0.9, // show, when scrolled 10% into view
                // duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 20, // move trigger to center of element
                reverse: false,
            })
                .setClassToggle(cardItem, classes.visible) // add class to reveal
                .addIndicators()
                .addTo(controller); // assign the scene to the controller
        }
        , []);

    return (
        <>
            <div className={classes.background} id="skills">
                <Typography variant={"h4"} color={"secondary"} className={classes.title}>
                    <Box textAlign={"center"}>
                        Skills
                    </Box>
                </Typography>
                <div className={classes.cardContainer}>
                    <Grid container spacing={1} className={classes.cards} justify={"center"}
                          ref={el => cardItem = el}>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={JS} title={"JavaScript"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={REACT} title={"React"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={REDUX} title={"Redux"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={VUE} title={"Vue"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={NODE} title={"Node.js"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={SQL} title={"MySql"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                        <Grid item xs={8} sm={4} md={3} lg={2}>
                            <SkillCard img={PYTHON} title={"Python"} num1={"100%"} num2={"100%"} num3={"100%"}/>
                        </Grid>
                    </Grid>
                </div>
                {/*<OtherSkills/>*/}
            </div>
        </>
    )
}



