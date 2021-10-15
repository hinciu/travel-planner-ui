import { all } from 'redux-saga/effects';
import { getForecastByCityNameWatcher } from "./forecastSaga";
import { createRouteSagaWatcher, getRouteSagaWatcher } from "./routeSaga";

export default function* rootSaga() {
    yield all([
        getForecastByCityNameWatcher(),
        createRouteSagaWatcher(),
        getRouteSagaWatcher()
    ]);
}