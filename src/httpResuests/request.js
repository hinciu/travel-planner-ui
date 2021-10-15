import axios from "axios";
import { TRAVEL_SERVICE_URL } from "../config/env";
import {
    TRAVEL_SERVICE_CREATE_ROUTE_PATH,
    TRAVEL_SERVICE_FORECAST_PATH,
    TRAVEL_SERVICE_GET_ROUTE_PATH
} from "../config/apiPath";

export const getForecastByCityName = (name, date) =>
    axios.get(TRAVEL_SERVICE_URL + TRAVEL_SERVICE_FORECAST_PATH.replace('{cityName}', name), { params: { date: date } })
        .then((res) => res?.data)
        .catch(err => {
            throw err;
        });

export const createRoute = (data) =>
    axios({
        method: 'post',
        url: TRAVEL_SERVICE_URL + TRAVEL_SERVICE_CREATE_ROUTE_PATH,
        data: {
            ...data
        }

    })
        .then((res) => res?.data)
        .catch((err) => {
            throw err;
        });

export const getRoute = (name) =>
    axios.get(TRAVEL_SERVICE_URL + TRAVEL_SERVICE_GET_ROUTE_PATH.replace('{name}', name))
        .then((res) => res?.data)
        .catch((err) => {
            throw err;
        });