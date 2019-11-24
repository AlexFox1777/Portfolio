import React from 'react'
import makeStyle from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyle({
    root: props => ({
        background: props.bg ? props.bg : "linear-gradient(45deg, #ffff7370 30%, #ff615154 90%)",
        paddingTop: "100px",
        paddingBottom: "100px"
    }),
    picContainer: {
        position: "relative",
    },
    pic: props => ({
        position: "absolute",
        top: props.order ? -150 : -150,
        left: props.order ? 30 : 120,
        width: "70%",
        height: "70%"
    }),
    pic2: props => ({
        position: "absolute",
        top: props.order ? -40 : -40,
        left: props.order ? 130 : 90,
        width: "70%",
        height: "70%"
    }),
    textSection: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    title: {
        marginBottom: 30,
    },
    img: {
        maxWidth: "400px"
    },
    links: {
        marginTop: "3%",
    },
    link: {
        margin: "5% 3% 0 3%",
    },
    gridItem1: props => ({
        order: props.order ? 1 : 2
    }),
    gridItem2: props => ({
        order: props.order ? 2 : 1
    })
});

export default function Project(props) {
    const {title, img, img2, text, git, video} = props;
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={0} md={6} className={classes.gridItem1}>
                    <div className={classes.picContainer}>
                        <div className={classes.pic}>
                            <img src={img} width={"100%"} className={classes.img}/>
                        </div>
                        <div className={classes.pic2}>
                            <img src={img2} width={"100%"} className={classes.img}/>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} className={`${classes.textSection} ${classes.gridItem2}`}>
                    <div className={classes.textContainer}>
                        <Typography variant={"h5"} color={"secondary"} className={classes.title}><Box
                            textAlign="center">{title}</Box></Typography>
                        <Typography color={"secondary"}> <Box textAlign="center">{text}</Box></Typography>
                        <Typography color={"secondary"}>
                            <Box textAlign="center" className={classes.links}>
                                <a href={git} className={classes.link}> github repo </a>
                                <a href={video} className={classes.link}> demo video </a>
                            </Box>
                        </Typography>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}