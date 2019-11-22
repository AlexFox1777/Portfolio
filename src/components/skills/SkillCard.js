import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    card: {
        border: "1px solid #dfdddd",
        margin: 20,
        borderBottom: "solid orange 4px",
    },
    img: {
        width: "100px",
        margin: "auto",
        paddingTop: "15px"
    }
});

export default function SkillCard(props) {
    const {img, title} = props;
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                component={"img"}
                image={img}
                className={classes.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <Box textAlign="center">{title}</Box>
                </Typography>
            </CardContent>
        </Card>
    )
}