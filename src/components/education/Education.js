import React, {useEffect, useRef} from 'react';
import Pic from './Group.svg'
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Paper from "@material-ui/core/Paper";
//Accordion
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Controller, Scene} from "scrollmagic";

const useStyles = makeStyles(theme => ({
    root: {
        // background: 'linear-gradient(45deg, #73b3ffcf 30%, #51ffef73 90%)',
    },
    accordion: {
        width: '90%',
        margin: "auto",
        paddingBottom: "80px",
    },
    title: {
        padding: "40px 0 90px 2%",
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            fontWeight: "bold",
        },
    },
    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {},
    panel: {
        border: '1px solid #cecece'
    },
    imgContainer:{
        display: "flex",
        opacity: 0,
        transform: "translateY(50px)",
        transition: 'all 1s ease-in-out',
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    visible: {
        opacity: 1,
        transform: "translateY(0px)"
    }
}));

export default function Education() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    const controller = new Controller();
    let image = useRef(null);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    useEffect(() => {
            new Scene({
                triggerElement: image,
                triggerHook: 0.9, // show, when scrolled 10% into view
                // duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 20, // move trigger to center of element
                reverse: false,
            })
                .setClassToggle(image, classes.visible) // add class to reveal
                .addIndicators()
                .addTo(controller); // assign the scene to the controller
        }
        , []);

    return (
        <Paper elevation={0} square={true} className={classes.root} id="education">
            <Typography variant={"h4"} color={"secondary"} className={classes.title}>
                <Box textAlign={"center"}>
                    My Education &
                    Experience
                </Box>
            </Typography>
            <div className={classes.accordion}>
                {/*panel1*/}
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading} color={"secondary"}> Bachelor degree of computer
                            science</Typography>
                        <Typography className={classes.secondaryHeading} color={"secondary"}>September 2015 – June
                            2018</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color={"secondary"}>
                            <Typography color={"secondary"} variant={"subtitle1"}>Course Highlights:</Typography>
                            <Typography color={"secondary"}>
                                Web Application Development, Java, JavaScript, PHP, Pascal,
                                Database Programming, Web
                                Design, Computer Architecture
                            </Typography>
                            <Typography color={"secondary"} variant={"subtitle1"}>Intership during
                                education:</Typography>
                            <Typography color={"secondary"} variant={"subtitle1"}>Company: Infoplex -
                                Biysk, Russia.</Typography>
                            <Typography color={"secondary"} variant={"subtitle1"}>Role:
                                Was assigned to
                                the role of frontend developer to redesign website for a local car
                                service center Inomarcet.
                            </Typography>
                        </Typography>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/*panel2*/}
                <ExpansionPanel expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                                className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading} color={"secondary"}>Lamda school, Full Stack Web
                            course</Typography>
                        <Typography className={classes.secondaryHeading} color={"secondary"}>May 2019 – February
                            2020</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color={"secondary"}>
                            Intership during education: <br/>
                            Organization: Safe Mothers, Safe Babies Non-profit organization that aims to reduce infant and pregnant mother mortality rates in the villages of rural Uganda. <br/>
                            Project: Riders for LIfe, Administrative Utility SPA linked to a NodeJS back-end. This project also utilized Frontline SMS messaging service that connected to our Postgres database. <br/>
                            Role: worked across the stack as a developer though the majority of my time was spent building the administrative facing SPA built using React.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

            <div className={classes.imgContainer} ref={el => image = el}>
                <img src={Pic} width={600}/>
            </div>


        </Paper>
    )
}