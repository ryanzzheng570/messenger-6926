import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        height: "75vh",
        '& .MuiButton-root': {
            fontFamily: 'Montserrat, sans-serif',
        }
    },
    info_container_signup: {
        marginTop: theme.spacing(2),
        paddingRight: theme.spacing(3),
    },
    form: {
        padding: theme.spacing(14, 9),
        '& input': {
            marginTop: theme.spacing(2),
        },
        '& label.Mui-focused': {
            color: '#B0B0B0',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#8e8e8e',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3A8DFF',
        },
    },
    btn_createAcc: {
        padding: theme.spacing(1, 3),
    },
    btn_Login_Page: {
        padding: theme.spacing(0, 5),
    },
    create_account_info: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(2),
        fontSize: theme.typography.fontSize,
    },
    btn_submit: {
        padding: theme.spacing(0, 6)
    },
    btn_forgot: {
        marginTop: theme.spacing(1),
    }
}));