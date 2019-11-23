import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from "@material-ui/core/Box";
import Progress from "./Progress";

const useStyles = makeStyles({
    flipCard: {
        margin: "auto",
        marginBottom: "40px",
        perspective: "1000px",
        width: "90%",
        height: "200px",
        "&:hover": {
            "& .makeStyles-flipCardInner-187": {
                transform: "rotateY(180deg)",
            }
        }
    },
    flipCardInner: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        transition: "transform 0.8s",
        transformStyle: "preserve-3d",
    },
    cardFront: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        border: "1px solid #dfdddd",
        borderBottom: "solid orange 4px",
    },
    cardBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)"
    },
    img: {
        width: "100px",
        margin: "auto",
        paddingTop: "15px"
    }
});

const COLORS = {
    blue: 'linear-gradient(45deg, #969ffa 30%, #e568d0 90%)',
    pink: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    yellow: 'linear-gradient(45deg, #fc8b8b 30%, #fcff2b 90%)',
    green: 'linear-gradient(45deg, #58fa62 30%, #66e9d1 90%)',
};

export default function SkillCard(props) {
    const {img, title, num1, num2, num3} = props;
    const classes = useStyles();
    return (
        <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
                <Card className={classes.cardFront}>
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

                <Card className={classes.cardBack}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <Box textAlign="left">{title}</Box>
                        </Typography>
                        <Progress progress={num1} color={COLORS.blue} title={title} name={"Understanding"} />
                        <Progress progress={num2} color={COLORS.yellow} title={title} name={"Troubleshooting"}/>
                        <Progress progress={num3} color={COLORS.green} title={title} name={"Fluency"}/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}