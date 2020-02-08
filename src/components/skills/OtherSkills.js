import React from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {
    AccessAlarm, Autorenew, GroupWork, Done, EmojiFoodBeverage,
    Accessibility, AccessTime, CastForEducation, BusinessCenter, LocalLibrary,
    Book, Storage, FileCopy, EmojiEmotions, Eco, EmojiNature
} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 100,
        display: 'flex',
        justifyContent: 'center',
        margin: "auto",
        width: "80%",
        flexWrap: 'wrap',
        '& > *': {
            margin: "1%",
        },
    },
    title: {
        textAlign: "center",
        padding: "4% 0 4% 2%",
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            fontWeight: "bold",
        },
    },
    column: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function OtherSkills() {
    const classes = useStyles();

    const IconTag = ({img}) =>{
        const Icon = img
        return <Icon />
    }

    const Column = ({lists}) => {
        return lists.map(item => (
            <ListItem>
                <ListItemIcon>
                    <IconTag img={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.description}/>
            </ListItem>
        ))
    }

    const Columns = () => {
        const columns = []
        for (let i = 4; i <= otherSkills.length; i += 4) {
            columns.push(i)
        }
        return columns.map(i => <Grid item xs={12} sm={6} md={6} lg={3}><Column lists={otherSkills.slice(i - 4, i)}/></Grid>)
    }

    return (
        <>
            <Typography color={"secondary"} variant={"h4"} className={classes.title}>Other Skills</Typography>
            <div className={classes.root}>
                <List className={classes.column}>
                    <Grid container spacing={1} justify={"center"}>
                        <Columns/>
                    </Grid>
                </List>
            </div>
        </>
    )
}

export const otherSkills = [
    {icon: AccessAlarm, description: "Time management"},
    {icon: Autorenew, description: "Problem solving"},
    {icon: GroupWork, description: "Teamwork"},
    {icon: Done, description: "Decision-making"},

    {icon: EmojiFoodBeverage, description: "Open-mindedness"},
    {icon: Accessibility, description: "Efficient Laziness"},
    {icon: AccessTime, description: "Patience"},
    {icon: CastForEducation, description: "Self-motivation"},

    {icon: BusinessCenter, description: "Addiction to working"},
    {icon: LocalLibrary, description: "Research"},
    {icon: Book, description: "Willingness to learn"},
    {icon: Storage,   description: "Data Analysis"},

    {icon: FileCopy, description: "Microsoft Office"},
    {icon: EmojiEmotions, description: "Web design"},
    {icon: Eco, description: "Illustrator"},
    {icon: EmojiNature, description: "After Effects"},
];
