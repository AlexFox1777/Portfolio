import React, {useEffect, useRef} from 'react';
import Pic from './Degree.svg'
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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SendIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    root: {
        // background: 'linear-gradient(45deg, #73b3ffcf 30%, #51ffef73 90%)',
        paddingTop: 20,
        paddingBottom: 40,
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
    imgContainer: {
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
    const [expanded, setExpanded] = React.useState('panel2');

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
                <ExpansionPanel expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                                className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading} color={"secondary"}>Lamda school</Typography>
                        <Typography className={classes.secondaryHeading} color={"secondary"}>May 2019 – Feb. 2020</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color={"secondary"}>
                            <Typography className={classes.heading} color={"secondary"}>
                                Full Stack Web Development, Software Engineer
                            </Typography>
                            <Typography color={"secondary"}>Course Highlights:
                                JavaScript, React, Redux,
                                SQLite, Python,
                                Django,
                                Computer Science,
                                Algorithms
                            </Typography>
                        </Typography>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/*panel2*/}
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading} color={"secondary"}>Altai State University</Typography>
                        <Typography className={classes.secondaryHeading} color={"secondary"}>Sep. 2015 – Jun. 2018</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color={"secondary"}>
                            <Typography color={"secondary"} variant={"subtitle1"}>
                                Bachelor of Science - BS, Information Technology
                            </Typography>
                            <Typography color={"secondary"}>Course Highlights:
                                Web Application Development, Java, JavaScript, PHP, Pascal,
                                Database Programming, Web
                                Design, Computer Architecture
                            </Typography>
                        </Typography>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/*panel3*/}
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                                className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Link to={"https://www.kiddle.co/"} className={classes.heading} color={"secondary"}>
                            <Typography className={classes.heading} color={"secondary"} style={{color: '#ce5656'}}>
                                Summer internship in company Kiddle</Typography>
                        </Link>
                        <Typography className={classes.secondaryHeading} color={"secondary"}>
                            Jun. 2018 – Sep. 2018
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color={"secondary"}>
                            <Typography color={"secondary"} variant={"subtitle1"}>Role: Junior Developer</Typography>
                            <Typography color={"secondary"} variant={"subtitle1"} style={{paddingTop: 10}}>Accomplishments: </Typography>
                            <List className={classes.column} dense={true}>
                                {["Worked on researching safe, child-friendly web-sites",
                                    "Managed and scaled data in DB ",
                                    "Improved search results up to 20% "
                                ].map(description =>
                                    <ListItem>
                                        <ListItemIcon>
                                            &#x25CF;
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography color={"secondary"}>
                                                  {description}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                )}
                            </List>
                        </Typography>

                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/*panel4*/}
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                                className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Link to={"http://link.2gis.ru/1.2/E48E6156/online/20200201/project20/70000001019926732/null/3ir587G6G6AH4HG3H1HH4sczAga8764975731131uuvmyH1884BG4899953G9cpmv893551I703129A41J4HG7IJGJIG2d7?http://www.inomarket.org"} className={classes.heading} color={"secondary"}>
                            <Typography className={classes.heading} color={"secondary"} style={{color: '#ce5656'}}>
                            Internship in company Inomarket
                            </Typography>
                        </Link>
                        <Typography className={classes.secondaryHeading} color={"secondary"}> Sep. 2017 – Dec. 2017</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color={"secondary"}>
                            <Typography color={"secondary"} variant={"subtitle1"}>Role: Junior Developer</Typography>
                            <Typography color={"secondary"} variant={"subtitle1"} style={{paddingTop: 10}}>Accomplishments: </Typography>
                            <List className={classes.column} dense={true}>
                                {["Collaborated with database developers",
                                    "Implemented user research",
                                    "Designed and Optimized UI, leading to increasing conversions up to 15%",
                                ].map(description =>
                                    <ListItem>
                                        <ListItemIcon>
                                            &#x25CF;
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography color={"secondary"}>
                                                    {description}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                )}
                            </List>
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