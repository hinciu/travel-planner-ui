import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../../pages/RoutesScreen/styles";
import ConfirmDialog from "../ConfirmationDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoute } from "../../redux/actions/routeActions";


const ForecastResultTable = ({
    showInfoMsg
}
) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [openSaveConfirmationDialog, setOpenSaveConfirmationDialog] = useState(false);
    const [routeName, setRouteName] = useState('');
    const forecastData = useSelector((state) => state?.forecast?.data);

    function handleSaveRoute() {
        setOpenSaveConfirmationDialog(true);
    }

    const handleSubmitRoute = e => {
        e.preventDefault();
        dispatch(createRoute({ routeName: routeName, forecastIds: forecastData.map(f => f.id) }));
        setOpenSaveConfirmationDialog(false);
    };

    const handleCloseConfirmation = e => {
        setOpenSaveConfirmationDialog(false);
    };

    return (
        <>
            <TableContainer className={classes.root} component={Paper}>
                {showInfoMsg && 'Destination for this date is already in list '}
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">City Name</TableCell>
                            <TableCell align="center">Country Code</TableCell>
                            <TableCell align="center">Clouds</TableCell>
                            <TableCell align="center">Temperature</TableCell>
                            <TableCell align="center">Travel date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {forecastData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.cityName}</TableCell>
                                <TableCell align="center">{row.countryCode}</TableCell>
                                <TableCell align="center">{row.clouds}</TableCell>
                                <TableCell align="center">{row.temp}</TableCell>
                                <TableCell align="center">{row.travelDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box className={classes.root}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSaveRoute}
                    className={classes.submitButton}
                >
                    Save Route
                </Button>
            </Box>
            <ConfirmDialog
                openConfirmDialog={openSaveConfirmationDialog}
                handleAffirmative={handleSubmitRoute}
                handleNegative={handleCloseConfirmation}
                setFormValue={setRouteName}
                buttonLable='Save'
                title='Save Route'
            />
        </>
    );

};

export default ForecastResultTable;