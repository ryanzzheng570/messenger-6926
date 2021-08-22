import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
      height: "75vh",
      '& .MuiButton-root': {
        fontFamily: 'Montserrat, sans-serif',
      }
    },
    info_container_signup: {
      marginTop: '20px',
      paddingRight: '30px',
    },
    form_container: {
      width: '33%',
      border: '1px solid #B0B0B0',
      borderRadius: '5px'
    },
    form: {
      padding: '140px 90px',
      '& input': {
        marginTop: '20px',
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
      padding: '15px 30px',
      color: '#3A8DFF',
      boxShadow: '0 0 10px #ccc',
    },
    create_account_info: {
      marginTop: '15px',
      marginRight: '20px',
      fontSize: '13px',
      color: 'grey',
    },
    btn_submit: {
      padding: '13px 60px'
    }
  }));