import React  from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core';

const ConfirmDialog = ({
  openConfirmDialog,
  handleAffirmative,
  handleNegative,
  setFormValue,
  buttonLable,
  title,

}) => {
    return (
        <Dialog open={openConfirmDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <form onSubmit={handleAffirmative}>
                <DialogContent>
                    <DialogContentText>
                        Please specify route name.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Route name"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) => setFormValue(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleNegative}>
                        Cancel
                    </Button>
                    <Button type='submit' color="primary">
                        {buttonLable}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ConfirmDialog;
