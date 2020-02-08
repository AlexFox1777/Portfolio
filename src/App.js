import React from 'react';
//components
import NavBar from "./components/navigation/NavBar";
import About from "./components/about/About";
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contact/Contacts";
import Footer from "./components/footer/Footer";

const useStyles = makeStyles(theme =>({
    container: {
        padding: "0 0 0 100px",
        boxSizing: "border-box",
        minWidth: "250px",
        width: "100%",
        overflow: "hidden",
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            paddingBottom: 65,
        },
        left:{
            [theme.breakpoints.down('xs')]:{
                // display: 'none'
            }
        }
    },

}));


function App() {
    const classes = useStyles();
    return (
        <div>
            <NavBar className={classes.left}/>
            <div className={classes.container}>
                <About/>
                <Skills/>
                <Education/>
                <Projects/>
                <Contacts/>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
