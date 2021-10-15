import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    submitButton: {
        borderRadius: '4rem',
        color: 'white',
        padding: theme.spacing(1, 3, 1, 3),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    },
}));