import { call, put , takeEvery} from 'redux-saga/effects';
import { GET_FORECAST_FAILED, GET_FORECAST_REQUESTED, GET_FORECAST_SUCCESS } from "../actions/actionTypes";
import { getForecastByCityName } from "../../httpResuests/request";

function* getForecastByCityNameSaga({ payload: { cityName , date } }) {
    try {
        const data = yield call(
            getForecastByCityName,
            cityName,
            date,
        );
        yield put({
            type: GET_FORECAST_SUCCESS,
            payload: { data },
        });
    } catch (err) {
        yield put({
            type: GET_FORECAST_FAILED,
            payload: { error: getErrorData(err) },
        });
    }
}

export function* getForecastByCityNameWatcher() {
    yield takeEvery(GET_FORECAST_REQUESTED, getForecastByCityNameSaga);
}

const UNKNOWN_ERROR = {
    error: {
        message: 'Unknown error',
    },
};

function getErrorData(err) {
    return !err.response
        ? { ...UNKNOWN_ERROR.error, message: err.message }
        : err.response?.data?.message;
}