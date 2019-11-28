import React, {useEffect, useState} from 'react'
//material-ui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Snackbar from '@material-ui/core/Snackbar'
//form
import * as Yup from 'yup'
import {Field, Form, withFormik} from "formik"
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative"
    },
    title: {
        padding: "80px 0 60px 2%",
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            fontWeight: "bold",
        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "80%",
        minWidth: 150,
        maxWidth: 500,
        margin: 'auto'
    },
    field: {
        width: "100%",
        height: "35px",
        border: "1.5px solid #D0D0D0",
        borderRadius: "4px",
        marginBottom: "15px",
        padding: "0 0 0 3%",
        '&:hover': {
            border: "1.5px solid #81DDFF",
        }
    },
    errorField: {
        border: "1.5px solid #FF472C",
        borderRadius: "4px",
        marginBottom: "15px",
        padding: "0 0 0 3%",
        '&:hover': {
            border: "1.5px solid #FF472C",
        }
    },
    errorLabel: {
        color: "red"
    },
    btn: {
        width: "35%",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "10px",
        border: "1.5px solid #2AA3FF",
        height: "35px",
        borderRadius: "4px",
        background: "#dbf1ff",
        "&:hover": {
            background: "#c5eaff",
            border: "1.5px solid #2E69FF",
        }
    },
    snackbar: {
        background: 'rgb(187,255,162)',
        height: '35px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        padding: "0 10px 5px 10px",
    },
    snackbarError: {
        background: 'rgb(255,164,133)',
    }

}));


function ContactForm(props) {
    const classes = useStyles();

    const defineError = (name) => {
        if (props.touched[name] && props.errors[name]) return `${classes.errorField}`
    };

    const defineLabelError = (name) => {
        if (props.touched[name] && props.errors[name]) return `${classes.errorLabel}`
    };

    useEffect(() => {
        if (props.status) {
            if (props.status.success || props.status.error) {
                setState({...state, open: true});
                setTimeout(() => {
                    handleClose()
                }, 2000)
            }
        }

    }, [props.isSubmitting, props.status]);

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const {vertical, horizontal, open} = state;

    const handleClose = () => {
        setState({...state, open: false});
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                key={`${vertical},${horizontal}`}
                open={open}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">I love snacks</span>}
            >
                <div
                    className={`${classes.snackbar} + ${(props.status && props.status.error) ? `${classes.snackbarError}` : ''}`}>
                    <Typography color={"secondary"}>
                        {props.status && props.status.success && "The email was sent"}
                        {props.status && props.status.error && "Error"}
                    </Typography>
                </div>
            </Snackbar>

            <Typography variant={"h4"} color={"secondary"} className={classes.title}><Box textAlign={"center"}>Contact
                me</Box></Typography>
            <Form className={classes.form}>
                <Typography color={"secondary"} className={`${defineLabelError('name')}`}>Name*</Typography>
                <Field name={"name"} type={"text"} className={`${classes.field} + ${defineError('name')}`}/>

                <Typography color={"secondary"} className={`${defineLabelError('company')}`}> Company </Typography>
                <Field name={"company"} type={"text"} className={`${classes.field} + ${defineError('company')}`}/>

                <Typography color={"secondary"} className={`${defineLabelError('phone')}`}>Phone*</Typography>
                <Field name={"phone"} type={"phone"} className={`${classes.field} + ${defineError('phone')}`}/>

                <Typography color={"secondary"} className={`${defineLabelError('email')}`}>Email*</Typography>
                <Field name={"email"} type={"email"} className={`${classes.field} + ${defineError('email')}`}/>

                <Typography color={"secondary"} className={`${defineLabelError('message')}`}>Message*</Typography>
                <Field name={"message"} type={"text"} className={`${classes.field} + ${defineError('message')}`}/>

                <button type={"submit"} className={classes.btn}>
                    <Typography color={"secondary"}>Send</Typography>
                </button>
            </Form>

        </div>
    )
}

const FormikContactForm = withFormik({
    mapPropsToValues({name, company, phone, email, message}) {
        return {
            name: name || '',
            company: company || '',
            phone: phone || '',
            email: email || '',
            message: message || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().max(50).required('Please type a name'),
        company: Yup.string().max(70),
        phone: Yup.string().max(11).required('Please type a phone number'),
        email: Yup.string().max(30).required('Please type an email'),
        message: Yup.string().max(300).required('Please type in a message')
    }),

    handleSubmit(values, {setStatus, setSubmitting}) {
        setStatus({
            success: true,
        });
        axios.post('https://portfolio-aleksandra-foksman.herokuapp.com/email/send', {message: values})
            .then(res => {
                setStatus({
                    success: true,
                });
            })
            .catch(err => {
                setStatus({
                    error: true,
                });
            });
        setSubmitting(false);
    }

})(ContactForm);

export default FormikContactForm;

