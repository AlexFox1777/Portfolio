import React from 'react';
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
        padding: "40px 0 90px 2%"
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
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    }
}));

export default function Education() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Paper elevation={0} square={true} className={classes.root} id={"education"}>
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
                            Intership during education:
                            Company: Safe mothers, safe Babies -
                            Community-based model that ensures that mothers and childrens health in first 1,000 days of
                            life.
                            Role: Was assigned to the role of front end developer to build reliable admin system. Also
                            was helping backend team to build endpoints to get requests from ODK mobile application.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

            <div className={classes.imgContainer}>
                <img src={Pic} width={600}/>
            </div>


        </Paper>
    )
}