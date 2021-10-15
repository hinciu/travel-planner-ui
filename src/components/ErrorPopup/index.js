import React  from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle, Typography,
} from '@material-ui/core';
import useStyles from "./styles";


const ErrorPoup = ({
errorMsg,
buttonAction,
openPoup
}) => {
    const classes = useStyles();
    return (
        <Dialog
            open={openPoup}
            classes={{paper: classes.errorDialogWrapper}}>
            <DialogTitle classes={classes.dialogTitle}>Error</DialogTitle>
                <DialogContent classes={classes.dialogContent}>
                    <Typography className={classes.popupMessage}>{errorMsg}</Typography>
                    <Button className={classes.errorButton} color="primary" onClick={buttonAction}>
                        Cancel
                    </Button>
                </DialogContent>
        </Dialog>
    );
};
export default ErrorPoup;
