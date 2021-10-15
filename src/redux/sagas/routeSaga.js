
import { call, put, takeEvery } from "redux-saga/effects";
import {
    CREATE_ROUTE_FAILED,
    CREATE_ROUTE_REQUESTED,
    CREATE_ROUTE_SUCCESS, GET_ROUTE_FAILED, GET_ROUTE_REQUESTED,
    GET_ROUTE_SUCCESS
} from "../actions/actionTypes";
import { createRoute, getRoute } from "../../httpResuests/request";
import { clearForecast } from "../actions/forecastActions";

function* createRouteSaga({ payload: { data } }) {
    try {
        const resp = yield call(createRoute,data);
        yield put({
            type: CREATE_ROUTE_SUCCESS,
            payload: { resp },
        });
        yield put(clearForecast())
    } catch (err) {
        yield put({
            type: CREATE_ROUTE_FAILED,
            payload: { error: getErrorData(err) },
        });
    }
}

function* getRouteSaga({ payload: { name } }) {
    try {
        const resp = yield call(getRoute,name);
        yield put({
            type: GET_ROUTE_SUCCESS,
            payload: { data: resp },
        });
    } catch (err) {
        yield put({
            type: GET_ROUTE_FAILED,
            payload: { error: getErrorData(err) },
        });
    }
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

export function* createRouteSagaWatcher() {
    yield takeEvery(CREATE_ROUTE_REQUESTED, createRouteSaga);
}

export function* getRouteSagaWatcher() {
    yield takeEvery(GET_ROUTE_REQUESTED, getRouteSaga);
}