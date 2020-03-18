import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography";
import Project from "./Project";
import {
    blackcatAcc, blackcatStack,
    blackcatText,
    blackcatTitle,
    foodieFunAcc, foodieFunStack,
    foodieFunText,
    foodieFunTitle,
    safeMotherAcc,
    safeMotherStack,
    safeMotherText,
    safeMotherTitle
} from "../text";
import Box from "@material-ui/core/Box";
//imgs
import logo from './resources/login.png'
import dashboard from './resources/mother-dashboard.png'
import foodieFan from './resources/foodie-fan.png'
import foodieFan2 from './resources/foodie-fan2.png'
import blackcat1 from './resources/blackcat1.PNG'
import blackcat2 from './resources/blackcat2.PNG'

const useStyles = makeStyles(theme => ({
    root: {

    },
    title: {
        padding: "90px 0 90px 2%",
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
            <Project title={safeMotherTitle} text={safeMotherText} accomplishments={safeMotherAcc}
                     img={logo}
                     img2={dashboard}
                     stack={safeMotherStack}
                     order={true}

                     bg={'linear-gradient(45deg, rgba(255, 255, 115, 0.44) 30%, rgba(255, 97, 81, 0.33) 90%)'}
                     git={"https://github.com/Lambda-School-Labs/safe-mothers-fe"}
                     video={"https://www.youtube.com/watch?v=KM4jNYUOg7Y&amp=&feature=youtu.be"}
            />
            <Project title={foodieFunTitle} text={foodieFunText} accomplishments={foodieFunAcc}
                     img={foodieFan2}
                     img2={foodieFan}
                     stack={foodieFunStack}
                     order={false}
                     bg={'linear-gradient(45deg, rgba(164, 255, 115, 0.81) 30%, rgba(35, 184, 255, 0.45) 90%)'}
                     git={"https://github.com/Foodie-Fan"}
                     website={"https://foodie-fan.netlify.com/"}

            />
            <Project title={blackcatTitle} text={blackcatText} accomplishments={blackcatAcc}
                     img={blackcat2}
                     img2={blackcat1}
                     stack={blackcatStack}
                     order={true}

                     bg={'linear-gradient(45deg, rgba(255, 255, 115, 0.44) 30%, rgba(255, 97, 81, 0.33) 90%)'}
                     git={"https://github.com/AlexFox1777/BlackCat-Sticker"}
                     website={"https://blackcat-sticker.herokuapp.com/"}
            />
        </div>
    )
}