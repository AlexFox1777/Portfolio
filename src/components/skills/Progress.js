import React from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyle from '@material-ui/core/styles/makeStyles'

const useStyle = makeStyle({
    root:{
        paddingBottom: "10px"
    },
    lightGray: {
        height: "10px",
        width: "100%",
        borderRadius: 4,
        backgroundColor: "#e4e4e4"
    },
    progress: props => ({
        height: "10px",
        width: props.progress,
        borderRadius: 4,
        background: props.color,
    })
});

export default function Progress(props) {
    const classes = useStyle(props);
    const {title, name} = props;
    return (
        <div className={classes.root}>
            <Typography color={"secondary"}>
                <Box textAlign="left">{name ? name : "None"}</Box>
            </Typography>

            <div className={classes.lightGray}>
                <div className={classes.progress}> </div>
            </div>
        </div>
    )
}