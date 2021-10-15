import { useState } from "react";
import {
    Box,
    Button,
    TextField,
} from "@material-ui/core";
import {useStyles} from './styles'
import { useDispatch, useSelector } from "react-redux";
import { clearForecastError, getForecast } from "../../redux/actions/forecastActions";
import ForecastResultTable from "../../components/ForecastResultTable";
import ConfirmDialog from "../../components/ConfirmationDialog";
import { clearRoutes, clearRoutesError, getRoute } from "../../redux/actions/routeActions";
import Summary from "../../components/Summary";
import ErrorPoup from "../../components/ErrorPopup";

const RoutesScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [countryName, setCountryName] = useState('');
    const [selectedDate, handleDateChange] = useState();
    const [openFindRouteConfirmationDialog, setFindRouteConfirmationDialog] = useState(false);
    const [routeName, setRouteName] = useState('');
    const [showAlreadyInListMsg, setAlreadyInListMsg] = useState(false);
    const [operationResultPopup, setOperationResultPopup] = useState(false);

    const {data: forecastData, error: forecastError, loading: forecastLoading} = useSelector((state) => state?.forecast);
    const {data: routeData, error: routeError, loading: routeLoading} = useSelector((state) => state?.route);

    const handleSubmitForecast = e => {
        setOperationResultPopup(true);
        e.preventDefault();
        if (forecastData.find(s => s.cityName === countryName
            && s.travelDate === selectedDate)){
            setAlreadyInListMsg(true);
        }else {
            dispatch(getForecast(countryName, selectedDate));
            setAlreadyInListMsg(false);
        }

    };

    const handleFindRoute = e => {
        setOperationResultPopup(true);
        e.preventDefault();
        dispatch(getRoute(routeName));
    };

    const handleCloseFindRouteConfirmation = e => {
        setFindRouteConfirmationDialog(false);
    };
    const handleCloseSummary = () => {
        dispatch(clearRoutes());
    }

    const closePoup = ()=> {
        dispatch(clearForecastError());
        dispatch(clearRoutesError());
        setOperationResultPopup(false);
    }
    return (
        <>
            <form className={classes.root} onSubmit={handleSubmitForecast}>
                <TextField
                    label="Country Name"
                    variant="filled"
                    required
                    value={countryName}
                    onChange={e => setCountryName(e.target.value)}
                />
                <TextField
                    id="date"
                    label="Travel Date"
                    type="date"
                    onChange={(e) => handleDateChange(e.target.value)}
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Box className={classes.submitButtonContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.submitButton}
                    >
                       Submit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=> setFindRouteConfirmationDialog(true)}
                    >
                        Find Route
                    </Button>
                </Box>
            </form>
            {forecastData.length > 0 && (<ForecastResultTable showInfoMsg={showAlreadyInListMsg}/>)}
            <ConfirmDialog
                openConfirmDialog={openFindRouteConfirmationDialog}
                handleAffirmative={handleFindRoute}
                handleNegative={handleCloseFindRouteConfirmation}
                setFormValue={setRouteName}
                buttonLable='Find'
                title='Find Route'
            />
            <Summary
                openConfirmDialog={routeData}
                handleNegative={handleCloseSummary}/>
            {forecastError && !forecastLoading && <ErrorPoup errorMsg={forecastError} openPoup={operationResultPopup} buttonAction={closePoup}/>}
            {routeError && !routeLoading && <ErrorPoup errorMsg={routeError} openPoup={operationResultPopup} buttonAction={closePoup}/>}
        </>
    );

};

export default RoutesScreen;