import React, {useEffect, useRef} from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyle from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
//imgs
import Instagram from './resources/instagram.svg'
import Tweeter from './resources/tweeter.svg'
import LinkedIn from './resources/linkedin.svg'
import {Controller, Scene} from "scrollmagic";
import FormikContactForm from "./ContactForm";

const useStyles = makeStyle({
    root: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: "5%",
        opacity: 0,
        transition: 'all 1s ease-in-out',
        transform: "translateY(50px)"
    },
    title: {
        padding: "10px 0 10px 0"
    },
    img: {
        margin: "0 1% 0 1%",
    },

    visible: {
        opacity: 1,
        transform: "translateY(0px)"
    }

});

export default function Contacts() {
    const classes = useStyles();
    let pic1 = useRef(null);
    const controller = new Controller();

    useEffect(() => {
            new Scene({
                triggerElement: pic1,
                triggerHook: 1.2, // show, when scrolled 10% into view
                // duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 20, // move trigger to center of element
                reverse: false,
            })
                .setClassToggle(pic1, classes.visible) // add class to reveal
                .addIndicators()
                .addTo(controller)
        }
        , []);

    return (
        <>
            <FormikContactForm/>
            <div className={classes.root} id={"contact"} ref={el => pic1 = el}>
                <Typography color={"secondary"} className={classes.title}>Stay In Touch</Typography>
                <div>
                    <a href={"https://www.instagram.com/sasha_foxman/"}>
                        <img src={Instagram} width={50} className={classes.img}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/aleksandra-foksman-551490192"}>
                        <img src={LinkedIn} width={50} className={classes.img}/></a>
                    <a href={"https://twitter.com/foksman"}>
                        <img src={Tweeter} width={50} className={classes.img}/>
                    </a>
                </div>
            </div>
        </>
    )
}