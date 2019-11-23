import React from 'react';
//components
import NavBar from "./components/navigation/NavBar";
import About from "./components/about/About";
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";

const useStyles = makeStyles({
    container: {
        paddingLeft: "100px",
        minWidth: "400px",
    },

});


function App() {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <div className={classes.container}>
                <About/>
                <Skills />
                <Education />
            </div>
        </div>
    );
}

export default App;
