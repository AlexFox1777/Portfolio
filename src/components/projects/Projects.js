import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography";
import Project from "./Project";
import {foodieFunText, foodieFunTitle, safeMotherText, safeMotherTitle} from "../text";
import Box from "@material-ui/core/Box";
//imgs
import logo from './resources/login.png'
import dashboard from './resources/mother-dashboard.png'
import foodieProfile from './resources/dashboard.png'
import foodieForm from './resources/form.png'

const useStyles = makeStyles(theme => ({
    root: {},
    title: {
        padding: "130px 0 90px 2%",
        boxSizing: "border-box",
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            fontWeight: "bold",
        },
    },
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root} id="projects">
            <Typography variant={"h4"} color={"secondary"} className={classes.title}>
                <Box textAlign={"center"}>
                    Projects
                </Box>
            </Typography>
            <Project title={safeMotherTitle} text={safeMotherText}
                     img={logo}
                     img2={dashboard}
                     order={true}
                     bg={"linear-gradient(45deg, #ffff7370 30%, #ff615154 90%)"}
                     git={"https://github.com/Lambda-School-Labs/safe-mothers-fe"}
                     video={"https://www.youtube.com/watch?v=KM4jNYUOg7Y&amp=&feature=youtu.be"}
            />
            <Project title={foodieFunTitle} text={foodieFunText}
                     img={foodieForm}
                     img2={foodieProfile}
                     order={false}
                     bg={"linear-gradient(45deg, #a4ff73cf 30%, #23b8ff73 90%)"}
                     git={"https://github.com/build-week-foodie-fun/FE"}
                     website={"https://foodiefunapp.netlify.com"}

            />
        </div>
    )
}