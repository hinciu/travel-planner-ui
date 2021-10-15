import { CLEAR_FORECAST, CLEAR_FORECAST_ERROR, GET_FORECAST_REQUESTED } from "./actionTypes";

export const getForecast = (cityName, date) => ({
    type: GET_FORECAST_REQUESTED,
    payload: {
        cityName,
        date
    },
});

export const clearForecast = () =>({
   type: CLEAR_FORECAST,
});

export const clearForecastError = () =>({
    type: CLEAR_FORECAST_ERROR,
});