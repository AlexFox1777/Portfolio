import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
//form
import * as Yup from 'yup'
import {Field, Form, withFormik} from "formik";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    title: {
        padding: "80px 0 60px 2%"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "30%",
        minWidth: 250,
        maxWidth: 800,
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

});


function ContactForm(props) {
    const classes = useStyles();

    const defineError = (name) => {
        if (props.touched[name] && props.errors[name]) return `${classes.errorField}`
    };

    const defineLabelError = (name) => {
        if (props.touched[name] && props.errors[name]) return `${classes.errorLabel}`
    };

    return (
        <div>
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

    handleSubmit(values, {props}) {
        console.log("values", values)
    }

})(ContactForm);

export default FormikContactForm;

