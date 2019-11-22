import React from 'react';
//components
import NavBar from "./components/navigation/NavBar";
import About from "./components/about/About";
//material
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skills from "./components/skills/Skills";

const useStyles = makeStyles({
    container: {
        paddingLeft: "100px",
    }
});


function App() {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <div className={classes.container}>
                <About/>
                <Skills />
            </div>
        </div>
    );
}

export default App;
