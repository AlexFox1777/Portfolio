import React from 'react'
import Face from "@material-ui/icons/Face";
import Book from "@material-ui/icons/MenuBook";
import School from "@material-ui/icons/School";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import Phone from "@material-ui/icons/Phone";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    links: {
        background: "#f2f5fe",
        borderRight: '2px solid #dbdfe7',
        height: "100%",
        width: "100px",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: "65px",
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-around',
            background: "#f2f5fe",
            bottom: 0,
            zIndex: 5,
            padding: 8,
            borderRight: 'none',
            borderTop: '1.5px solid #dbdfe7',
            minWidth: "250px",
        },
    },
    link: {
        fontSize: "1rem",
        textAlign: "center",
        color: "#a29c9c",
        paddingBottom: "40%",
        "&:hover": {
            color: "#7c6f6f",
        },
        [theme.breakpoints.down('xs')]:{
            padding: 0
        }
    },
    linkText:{
        [theme.breakpoints.down('xs')]:{
            display: 'none'
        }
    },
    icon: {
        height: "2.3rem",
        width: "2.3rem"
    }
}));

function NavBar() {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={0} square={true} className={classes.links}>
                <a className={classes.link} href="#about">
                    <Face className={classes.icon}/>
                    <p className={classes.linkText}>About</p>
                </a>

                <a className={classes.link} href="#skills">
                    <Book className={classes.icon}/>
                    <p className={classes.linkText}>Skills</p>
                </a>

                <a className={classes.link} href="#education">
                    <School className={classes.icon}/>
                    <p className={classes.linkText}>Education</p>
                </a>
                <a className={classes.link} href="#projects">
                    <BusinessCenter className={classes.icon}/>
                    <p className={classes.linkText}> Projects</p>
                </a>
                <a className={classes.link} href="#contact">
                    <Phone className={classes.icon}/>
                    <p className={classes.linkText}>Contacts</p>
                </a>
            </Paper>
        </div>
    )
}

export default NavBar;