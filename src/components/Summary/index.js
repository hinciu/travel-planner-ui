import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@material-ui/core';
import { useSelector } from "react-redux";

const Summary = ({
    openConfirmDialog,
    handleNegative,

}) => {
    const routeData = useSelector((state) => state?.route?.data);

    function createRow (item){
        return <li>{'City: '+ item.cityName + ' Temp: '+ item.temp + ' Date: ' + item.travelDate + ' Clouds: ' + item.clouds}</li>;
    }
    const destinations = routeData?.cities.map(d=> createRow(d));
    return (

        <Dialog open={openConfirmDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Summary</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You have the following destinations for this route:
                    {destinations}
                    {routeData?.recommendations}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleNegative}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Summary;
